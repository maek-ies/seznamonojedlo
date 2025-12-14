import React, { useState } from 'react';

const days = [
    { key: 'unassigned', label: 'Nepřiřazeno', short: '?' },
    { key: 'mon', label: 'Pondělí', short: 'Po' },
    { key: 'tue', label: 'Úterý', short: 'Út' },
    { key: 'wed', label: 'Středa', short: 'St' },
    { key: 'thu', label: 'Čtvrtek', short: 'Čt' },
    { key: 'fri', label: 'Pátek', short: 'Pá' },
    { key: 'sat', label: 'Sobota', short: 'So' },
    { key: 'sun', label: 'Neděle', short: 'Ne' }
];

const slotLabels = {
    breakfast: 'Snídaně',
    lunch: 'Oběd',
    dinner: 'Večeře',
    snack: 'Svačina'
};

const MealPlan = ({ plannedMeals, meals, onRemove, onMealClick, onMoveMeal }) => {
    const [draggedItem, setDraggedItem] = useState(null);

    const getMealById = (id) => meals.find(m => m.id === id);

    const handleDragStart = (e, dayKey, index, planned) => {
        setDraggedItem({ fromDay: dayKey, index, planned });
        e.dataTransfer.effectAllowed = 'move';
        // Required for Firefox and some other browsers to initiate drag
        e.dataTransfer.setData('text/plain', JSON.stringify({ fromDay: dayKey, index }));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, toDay) => {
        e.preventDefault();
        if (draggedItem && draggedItem.fromDay !== toDay) {
            onMoveMeal(draggedItem.fromDay, draggedItem.index, toDay, draggedItem.planned);
        }
        setDraggedItem(null);
    };

    const handleDragEnd = () => {
        setDraggedItem(null);
    };

    return (
        <div className="meal-plan">
            <div className="meal-plan-grid">
                {days.map(day => (
                    <div
                        key={day.key}
                        className={`meal-plan-day ${day.key === 'unassigned' ? 'unassigned-day' : ''}`}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, day.key)}
                    >
                        <h3 className="day-header">{day.label}</h3>
                        <div className="day-meals">
                            {plannedMeals[day.key] && plannedMeals[day.key].length > 0 ? (
                                plannedMeals[day.key].map((planned, index) => {
                                    const meal = getMealById(planned.mealId);
                                    if (!meal) return null;
                                    return (
                                        <div
                                            key={index}
                                            className="planned-meal"
                                            draggable="true"
                                            onDragStart={(e) => handleDragStart(e, day.key, index, planned)}
                                            onDragEnd={handleDragEnd}
                                            onClick={() => onMealClick && onMealClick(meal)}
                                        >
                                            <div className="planned-meal-info">
                                                <span className="planned-slot">{slotLabels[planned.slot]}</span>
                                                <span className="planned-name">{meal.name}</span>
                                            </div>
                                            <button
                                                className="btn-remove-plan"
                                                onClick={(e) => { e.stopPropagation(); onRemove(day.key, index); }}
                                                title="Odebrat z plánu"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    );
                                })
                            ) : (
                                <p className="no-planned">Žádná jídla</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export { days, slotLabels };
export default MealPlan;
