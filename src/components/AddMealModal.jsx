import React, { useState } from 'react';

const AddMealModal = ({ isOpen, onClose, onAddMeal }) => {
    const [formData, setFormData] = useState({
        name: '',
        categories: ['Breakfast'], // Changed to array
        time: '',
        difficulty: 'Snadné',
        kidFriendly: false,
        imageUrl: '',
        ingredients: []
    });
    const [newIngredient, setNewIngredient] = useState({ name: '', amount: '' });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()) return;
        if (formData.categories.length === 0) {
            alert('Vyberte alespoň jednu kategorii');
            return;
        }

        // Set defaults for optional fields if not provided
        const mealData = {
            ...formData,
            time: formData.time.trim() || '30 min',
            difficulty: formData.difficulty || 'Snadné'
        };

        onAddMeal(mealData);
        setFormData({ name: '', categories: ['Breakfast'], time: '', difficulty: 'Snadné', kidFriendly: false, imageUrl: '', ingredients: [] });
        setNewIngredient({ name: '', amount: '' });
        onClose();
    };

    const toggleCategory = (category) => {
        setFormData(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }));
    };

    const addIngredient = () => {
        if (!newIngredient.name || !newIngredient.amount) return;
        setFormData({
            ...formData,
            ingredients: [...formData.ingredients, { ...newIngredient }]
        });
        setNewIngredient({ name: '', amount: '' });
    };

    const removeIngredient = (index) => {
        setFormData({
            ...formData,
            ingredients: formData.ingredients.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2 className="modal-title">Přidat nové jídlo</h2>
                <form onSubmit={handleSubmit} className="add-meal-form">
                    <div className="form-group">
                        <label>Název jídla</label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="např. Pikantní tofu stir-fry"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Kategorie (vyberte alespoň jednu)</label>
                        <div className="category-checkboxes">
                            {['Breakfast', 'Lunch', 'Dinner', 'Snack'].map(cat => (
                                <label key={cat} className="checkbox-label category-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={formData.categories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                    />
                                    <span>
                                        {cat === 'Breakfast' && 'Snídaně'}
                                        {cat === 'Lunch' && 'Oběd'}
                                        {cat === 'Dinner' && 'Večeře'}
                                        {cat === 'Snack' && 'Svačina'}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Čas (např. 30 min)</label>
                            <input
                                type="text"
                                value={formData.time}
                                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                placeholder="30 min"
                            />
                        </div>

                        <div className="form-group">
                            <label>Obtížnost</label>
                            <select
                                value={formData.difficulty}
                                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                            >
                                <option value="Snadné">Snadné</option>
                                <option value="Střední">Střední</option>
                                <option value="Těžké">Těžké</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>URL obrázku (volitelné)</label>
                        <input
                            type="url"
                            value={formData.imageUrl}
                            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                            placeholder="https://example.com/obrazek.jpg"
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={formData.kidFriendly}
                                onChange={(e) => setFormData({ ...formData, kidFriendly: e.target.checked })}
                            />
                            <span>Pro děti ⭐</span>
                        </label>
                    </div>

                    <div className="form-group ingredients-section">
                        <label>Ingredience</label>

                        {formData.ingredients.length > 0 && (
                            <ul className="ingredients-list">
                                {formData.ingredients.map((ing, index) => (
                                    <li key={index}>
                                        <span>{ing.name} - {ing.amount}</span>
                                        <button type="button" className="btn-remove" onClick={() => removeIngredient(index)}>×</button>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="ingredient-input-row">
                            <input
                                type="text"
                                value={newIngredient.name}
                                onChange={(e) => setNewIngredient({ ...newIngredient, name: e.target.value })}
                                placeholder="Název ingredience"
                            />
                            <input
                                type="text"
                                value={newIngredient.amount}
                                onChange={(e) => setNewIngredient({ ...newIngredient, amount: e.target.value })}
                                placeholder="Množství"
                            />
                            <button type="button" className="btn-add-ingredient" onClick={addIngredient}>+</button>
                        </div>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-secondary" onClick={onClose}>Zrušit</button>
                        <button type="submit" className="btn-primary">Přidat jídlo</button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddMealModal;
