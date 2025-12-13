import React from 'react';

const categoryMap = {
    'Breakfast': 'Snídaně',
    'Lunch': 'Oběd',
    'Dinner': 'Večeře',
    'Snack': 'Svačina'
};

const MealCard = ({ meal, onClick, onQuickAdd }) => {
    // Support both old (string) and new (array) category format
    const categories = Array.isArray(meal.categories)
        ? meal.categories
        : (meal.category ? [meal.category] : []);

    return (
        <div className="meal-card" onClick={onClick} style={{ cursor: 'pointer' }}>
            <div className="meal-image-container">
                <img src={meal.image} alt={meal.name} className="meal-image" loading="lazy" />
                <div className="meal-category-tags">
                    {categories.map((cat, idx) => (
                        <span key={idx} className="meal-category-tag">
                            {categoryMap[cat] || cat}
                        </span>
                    ))}
                </div>
                {meal.kidFriendly && <span className="kid-friendly-badge">⭐</span>}
                <button
                    className="btn-quick-add-card"
                    onClick={onQuickAdd}
                    title="Přidat do plánu"
                >
                    +
                </button>
            </div>
            <div className="meal-content">
                <h3 className="meal-title">{meal.name}</h3>
                <div className="meal-meta">
                    <span className="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        {meal.time}
                    </span>
                    <span className="meta-item">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                        </svg>
                        {meal.difficulty}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MealCard;
