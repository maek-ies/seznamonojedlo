import React from 'react';

const difficultyMap = {
    'Easy': 'Snadné',
    'Medium': 'Střední',
    'Hard': 'Těžké'
};

const categoryMap = {
    'Breakfast': 'Snídaně',
    'Lunch': 'Oběd',
    'Dinner': 'Večeře',
    'Snack': 'Svačina'
};

const MealDetailModal = ({ meal, isOpen, onClose, onAddToPlan, onEdit, onDelete }) => {
    if (!isOpen || !meal) return null;

    const handleDelete = () => {
        onDelete(meal.id);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content meal-detail-modal" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                {meal.image && (
                    <img src={meal.image} alt={meal.name} className="meal-detail-image" />
                )}

                <div className="meal-detail-content">
                    <h2 className="meal-detail-title">{meal.name}</h2>

                    <div className="meal-detail-meta">
                        {/* Support both old (string) and new (array) category format */}
                        {Array.isArray(meal.categories) ? (
                            meal.categories.map((cat, idx) => (
                                <span key={idx} className="meal-detail-tag">{categoryMap[cat] || cat}</span>
                            ))
                        ) : (
                            <span className="meal-detail-tag">{categoryMap[meal.category] || meal.category}</span>
                        )}
                        <span className="meal-detail-info">⏱️ {meal.time}</span>
                        <span className="meal-detail-info">📊 {difficultyMap[meal.difficulty] || meal.difficulty}</span>
                        {meal.kidFriendly && <span className="meal-detail-info">⭐ Pro děti</span>}
                    </div>

                    {meal.ingredients && meal.ingredients.length > 0 && (
                        <div className="meal-detail-ingredients">
                            <h3>Ingredience</h3>
                            <ul>
                                {meal.ingredients.map((ing, index) => (
                                    <li key={index}>
                                        <span className="ingredient-name">{ing.name}</span>
                                        <span className="ingredient-amount">{ing.amount}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(!meal.ingredients || meal.ingredients.length === 0) && (
                        <p className="no-ingredients">Ingredience nebyly přidány.</p>
                    )}

                    <div className="modal-actions">
                        <button className="btn-delete" onClick={handleDelete}>
                            🗑️ Smazat
                        </button>
                        <button className="btn-secondary" onClick={onEdit}>
                            ✏️ Upravit
                        </button>
                        <button className="btn-primary" onClick={onAddToPlan}>
                            📅 Přidat do plánu
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetailModal;
