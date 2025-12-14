import React, { useMemo, useState, useEffect } from 'react';

function ShoppingList({ plannedMeals, meals }) {
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem('shopping_list_checked');
        return saved ? JSON.parse(saved) : {};
    });

    const [extraItems, setExtraItems] = useState(() => {
        const saved = localStorage.getItem('shopping_list_extra');
        return saved ? JSON.parse(saved) : [];
    });

    const [newItemName, setNewItemName] = useState('');
    const [newItemAmount, setNewItemAmount] = useState('');

    useEffect(() => {
        localStorage.setItem('shopping_list_checked', JSON.stringify(checkedItems));
    }, [checkedItems]);

    useEffect(() => {
        localStorage.setItem('shopping_list_extra', JSON.stringify(extraItems));
    }, [extraItems]);

    const toggleItem = (name) => {
        setCheckedItems(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const addExtraItem = (e) => {
        e.preventDefault();
        if (!newItemName.trim()) return;

        const newItem = {
            id: Date.now(),
            name: newItemName.trim(),
            amount: newItemAmount.trim()
        };

        setExtraItems(prev => [...prev, newItem]);
        setNewItemName('');
        setNewItemAmount('');
    };

    const removeExtraItem = (id) => {
        setExtraItems(prev => prev.filter(item => item.id !== id));
    };

    const shoppingList = useMemo(() => {
        const ingredientsMap = new Map();

        // 1. Process Planned Meals
        Object.entries(plannedMeals).forEach(([day, dayMeals]) => {
            // Include unassigned meals
            // if (day === 'unassigned') return; 

            dayMeals.forEach(planItem => {
                const meal = meals.find(m => m.id === planItem.mealId);
                if (!meal || !meal.ingredients) return;

                meal.ingredients.forEach(ingredient => {
                    const normalizedName = ingredient.name.trim().toLowerCase();

                    if (!ingredientsMap.has(normalizedName)) {
                        ingredientsMap.set(normalizedName, {
                            originalName: ingredient.name,
                            items: []
                        });
                    }

                    ingredientsMap.get(normalizedName).items.push({
                        amount: ingredient.amount,
                        mealName: meal.name,
                        day,
                        type: 'planned'
                    });
                });
            });
        });

        // 2. Process Extra Items
        extraItems.forEach(item => {
            const normalizedName = item.name.trim().toLowerCase();

            if (!ingredientsMap.has(normalizedName)) {
                ingredientsMap.set(normalizedName, {
                    originalName: item.name,
                    items: []
                });
            }

            ingredientsMap.get(normalizedName).items.push({
                amount: item.amount,
                mealName: 'Jiné / Extra',
                day: 'extra',
                type: 'extra',
                id: item.id
            });
        });

        // Sort ingredients alphabetically
        return Array.from(ingredientsMap.values()).sort((a, b) =>
            a.originalName.localeCompare(b.originalName, 'cs', { sensitivity: 'base' })
        );
    }, [plannedMeals, meals, extraItems]);

    const getDayName = (dayKey) => {
        const days = {
            mon: 'Po', tue: 'Út', wed: 'St', thu: 'Čt', fri: 'Pá', sat: 'So', sun: 'Ne',
            unassigned: 'Nepřiřazeno', extra: ''
        };
        return days[dayKey] || dayKey;
    };

    // Remove the "empty list" check if we want to allow adding items even if plan is empty
    // But basic check implies if both are empty
    if (shoppingList.length === 0 && extraItems.length === 0) {
        return (
            <div className="shopping-list-container">
                <div className="add-extra-item-form">
                    <h3>Přidat položku</h3>
                    <form onSubmit={addExtraItem} className="extra-item-form">
                        <input
                            type="text"
                            placeholder="Název (např. Mléko)"
                            value={newItemName}
                            onChange={(e) => setNewItemName(e.target.value)}
                            className="extra-input"
                        />
                        <input
                            type="text"
                            placeholder="Množství"
                            value={newItemAmount}
                            onChange={(e) => setNewItemAmount(e.target.value)}
                            className="extra-input amount"
                        />
                        <button type="submit" className="btn-add-extra">+</button>
                    </form>
                </div>
                <div className="shopping-list-empty">
                    <p>V plánu nejsou žádná jídla.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="shopping-list-container">
            <div className="add-extra-item-form">
                <form onSubmit={addExtraItem} className="extra-item-form">
                    <input
                        type="text"
                        placeholder="Nová položka..."
                        value={newItemName}
                        onChange={(e) => setNewItemName(e.target.value)}
                        className="extra-input"
                    />
                    <input
                        type="text"
                        placeholder="Mn."
                        value={newItemAmount}
                        onChange={(e) => setNewItemAmount(e.target.value)}
                        className="extra-input amount"
                    />
                    <button type="submit" className="btn-add-extra">+</button>
                </form>
            </div>

            <div className="shopping-list">
                {shoppingList.map((item, index) => (
                    <div
                        key={index}
                        className={`shopping-list-item ${checkedItems[item.originalName] ? 'checked' : ''}`}
                        onClick={() => toggleItem(item.originalName)}
                    >
                        <div className="shopping-item-header">
                            <input
                                type="checkbox"
                                checked={!!checkedItems[item.originalName]}
                                onChange={() => { }} // Handled by div click
                                className="shopping-checkbox"
                            />
                            <h3 className="ingredient-name">{item.originalName}</h3>
                        </div>
                        <ul className="ingredient-details">
                            {item.items.map((detail, idx) => (
                                <li key={idx}>
                                    <span className="ingredient-amount">{detail.amount}</span>
                                    <span className="ingredient-source">
                                        {detail.type === 'extra' ? (
                                            <span className="extra-item-row">
                                                (Extra)
                                                <button
                                                    className="btn-remove-extra"
                                                    onClick={(e) => { e.stopPropagation(); removeExtraItem(detail.id); }}
                                                >
                                                    ×
                                                </button>
                                            </span>
                                        ) : (
                                            ` (${getDayName(detail.day)}: ${detail.mealName})`
                                        )}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShoppingList;
