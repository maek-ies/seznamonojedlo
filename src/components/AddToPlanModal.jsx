import React, { useState } from 'react';
import { days, slotLabels } from './MealPlan';

const AddToPlanModal = ({ meal, isOpen, onClose, onAdd }) => {
    const [selectedDay, setSelectedDay] = useState('unassigned');
    const [selectedSlot, setSelectedSlot] = useState('dinner');

    if (!isOpen || !meal) return null;

    const handleAdd = () => {
        onAdd(meal.id, selectedDay, selectedSlot);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content add-to-plan-modal" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal-title">Přidat do plánu</h2>
                <p className="plan-meal-name">{meal.name}</p>

                <div className="form-group">
                    <label>Den</label>
                    <select value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                        {days.map(day => (
                            <option key={day.key} value={day.key}>{day.label}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Typ jídla</label>
                    <select value={selectedSlot} onChange={(e) => setSelectedSlot(e.target.value)}>
                        {Object.entries(slotLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label}</option>
                        ))}
                    </select>
                </div>

                <div className="modal-actions">
                    <button type="button" className="btn-secondary" onClick={onClose}>Zrušit</button>
                    <button type="button" className="btn-primary" onClick={handleAdd}>Přidat</button>
                </div>
            </div>
        </div>
    );
};

export default AddToPlanModal;
