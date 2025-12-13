import React from 'react';

const categories = ['Vše', 'Snídaně', 'Oběd', 'Večeře', 'Svačina'];
const categoryMap = {
    'Vše': 'All',
    'Snídaně': 'Breakfast',
    'Oběd': 'Lunch',
    'Večeře': 'Dinner',
    'Svačina': 'Snack'
};

const CategoryFilter = ({ selectedCategory, onSelectCategory, kidFriendlyFilter, onToggleKidFriendly, searchQuery, onSearchChange }) => {
    return (
        <div className="category-filter-container">
            <div className="category-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`category-btn ${selectedCategory === categoryMap[category] ? 'active' : ''}`}
                        onClick={() => onSelectCategory(categoryMap[category])}
                    >
                        {category}
                    </button>
                ))}
                <button
                    className={`category-btn kid-friendly-btn ${kidFriendlyFilter ? 'active' : ''}`}
                    onClick={onToggleKidFriendly}
                    title={kidFriendlyFilter ? 'Zobrazit všechna jídla' : 'Zobrazit pouze jídla pro děti'}
                >
                    {kidFriendlyFilter ? '⭐ Pro děti ✓' : '☆ Pro děti'}
                </button>
                <input
                    type="text"
                    className="search-input"
                    placeholder="🔍 Hledat jídlo..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
        </div>
    );
};

export default CategoryFilter;
