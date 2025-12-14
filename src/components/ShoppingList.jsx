import React, { useMemo, useState, useEffect } from 'react';

function ShoppingList({ plannedMeals, meals }) {
    const [checkedItems, setCheckedItems] = useState(() => {
        const saved = localStorage.getItem('shopping_list_checked');
        return saved ? JSON.parse(saved) : {};
    });

    useEffect(() => {
        localStorage.setItem('shopping_list_checked', JSON.stringify(checkedItems));
    }, [checkedItems]);

    const toggleItem = (name) => {
        setCheckedItems(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };
    const shoppingList = useMemo(() => {
        const ingredientsMap = new Map();

        // Iterate through all days in the plan
        Object.entries(plannedMeals).forEach(([day, dayMeals]) => {
            // if (day === 'unassigned') return; // Include unassigned meals

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
                        day
                    });
                });
            });
        });

        // Sort ingredients alphabetically
        return Array.from(ingredientsMap.values()).sort((a, b) =>
            a.originalName.localeCompare(b.originalName, 'cs', { sensitivity: 'base' })
        );
    }, [plannedMeals, meals]);

    const getDayName = (dayKey) => {
        const days = {
            mon: 'Po', tue: 'Út', wed: 'St', thu: 'Čt', fri: 'Pá', sat: 'So', sun: 'Ne',
            unassigned: 'Nepřiřazeno'
        };
        return days[dayKey] || dayKey;
    };

    if (shoppingList.length === 0) {
        return (
            <div className="shopping-list-empty">
                <p>V plánu nejsou žádná jídla, takže nákupní seznam je prázdný.</p>
                <p>Přidejte jídla do plánu a seznam se zde automaticky vytvoří.</p>
            </div>
        );
    }

    return (
        <div className="shopping-list-container">
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
                                        ({getDayName(detail.day)}: {detail.mealName})
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
