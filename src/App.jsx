import { useState, useEffect } from 'react';
import { meals as defaultMeals } from './data/meals';
import MealCard from './components/MealCard';
import CategoryFilter from './components/CategoryFilter';
import AddMealModal from './components/AddMealModal';
import ThemeToggle from './components/ThemeToggle';
import ImageToggle from './components/ImageToggle';
import MealDetailModal from './components/MealDetailModal';
import MealPlan from './components/MealPlan';
import AddToPlanModal from './components/AddToPlanModal';
import EditMealModal from './components/EditMealModal';

const emptyPlan = {
  unassigned: [], mon: [], tue: [], wed: [], thu: [], fri: [], sat: [], sun: []
};

function App() {
  const [activeTab, setActiveTab] = useState('meals');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showImages, setShowImages] = useState(() => {
    const saved = localStorage.getItem('meal_planner_show_images');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kidFriendlyFilter, setKidFriendlyFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [mealToAdd, setMealToAdd] = useState(null);
  const [mealToEdit, setMealToEdit] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('meal_planner_dark_mode');
    return saved !== null ? JSON.parse(saved) : true;
  });
  const [meals, setMeals] = useState(() => {
    const saved = localStorage.getItem('meal_planner_data');
    return saved ? JSON.parse(saved) : defaultMeals;
  });
  const [plannedMeals, setPlannedMeals] = useState(() => {
    const saved = localStorage.getItem('meal_planner_plan');
    return saved ? JSON.parse(saved) : emptyPlan;
  });

  useEffect(() => {
    localStorage.setItem('meal_planner_data', JSON.stringify(meals));
  }, [meals]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('meal_planner_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('meal_planner_plan', JSON.stringify(plannedMeals));
  }, [plannedMeals]);

  useEffect(() => {
    localStorage.setItem('meal_planner_show_images', JSON.stringify(showImages));
  }, [showImages]);

  const addMeal = (newMeal) => {
    const meal = {
      id: Date.now(),
      ...newMeal,
      image: newMeal.imageUrl || 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    };
    delete meal.imageUrl;
    setMeals([meal, ...meals]);
  };

  const updateMeal = (updatedMeal) => {
    setMeals(meals.map(meal => meal.id === updatedMeal.id ? updatedMeal : meal));
  };

  const deleteMeal = (mealId) => {
    if (window.confirm('Opravdu chcete smazat toto jídlo?')) {
      setMeals(meals.filter(meal => meal.id !== mealId));
      // Also remove from planned meals
      const newPlannedMeals = { ...plannedMeals };
      Object.keys(newPlannedMeals).forEach(day => {
        newPlannedMeals[day] = newPlannedMeals[day].filter(p => p.mealId !== mealId);
      });
      setPlannedMeals(newPlannedMeals);
    }
  };

  const addToPlan = (mealId, day, slot) => {
    setPlannedMeals(prev => ({
      ...prev,
      [day]: [...prev[day], { mealId, slot }]
    }));
  };

  const removeFromPlan = (day, index) => {
    setPlannedMeals(prev => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index)
    }));
  };

  const moveMeal = (fromDay, index, toDay, planned) => {
    setPlannedMeals(prev => {
      const newPlan = { ...prev };
      newPlan[fromDay] = prev[fromDay].filter((_, i) => i !== index);
      newPlan[toDay] = [...prev[toDay], planned];
      return newPlan;
    });
  };

  const handleQuickAdd = (e, meal) => {
    e.stopPropagation();
    setMealToAdd(meal);
  };

  let filteredMeals = selectedCategory === 'All'
    ? meals
    : meals.filter(meal => {
      // Support both old format (string) and new format (array)
      if (Array.isArray(meal.categories)) {
        return meal.categories.includes(selectedCategory);
      }
      return meal.category === selectedCategory;
    });

  if (kidFriendlyFilter) {
    filteredMeals = filteredMeals.filter(meal => meal.kidFriendly === true);
  }

  if (searchQuery.trim()) {
    filteredMeals = filteredMeals.filter(meal =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const exportData = () => {
    const data = {
      meals,
      plannedMeals,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `denni-pochoutky-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        if (data.meals) setMeals(data.meals);
        if (data.plannedMeals) setPlannedMeals(data.plannedMeals);
        alert('Data úspešně importována!');
      } catch (err) {
        alert('Chyba při importu: Neplatný soubor');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-top">
          <div className="header-left">
            <h1 className="title">SeznamonoJidlo</h1>
          </div>
          <div className="header-right">
            <label className="btn-import" title="Importovat data">
              <input type="file" accept=".json" onChange={importData} hidden />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="export-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
            </label>
            <button className="btn-export" onClick={exportData} title="Exportovat data">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="export-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </button>
            <ImageToggle showImages={showImages} onToggle={() => setShowImages(!showImages)} />
            <ThemeToggle darkMode={darkMode} onToggle={() => setDarkMode(!darkMode)} />
          </div>
        </div>
      </header>

      <div className="tab-bar">
        <div className="tab-buttons">
          <button
            className={`tab-btn ${activeTab === 'meals' ? 'active' : ''}`}
            onClick={() => setActiveTab('meals')}
          >
            🍽️ Jídla
          </button>
          <button
            className={`tab-btn ${activeTab === 'plan' ? 'active' : ''}`}
            onClick={() => setActiveTab('plan')}
          >
            📅 Plán
          </button>
          <button className="btn-primary-sm" onClick={() => setIsModalOpen(true)}>
            + Přidat jídlo
          </button>
        </div>
      </div>

      {activeTab === 'meals' && (
        <>
          <div className="controls-bar">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              kidFriendlyFilter={kidFriendlyFilter}
              onToggleKidFriendly={() => setKidFriendlyFilter(!kidFriendlyFilter)}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>

          <div className="meal-grid">
            {filteredMeals.map(meal => (
              <MealCard
                key={meal.id}
                meal={meal}
                showImages={showImages}
                onClick={() => setSelectedMeal(meal)}
                onQuickAdd={(e) => handleQuickAdd(e, meal)}
              />
            ))}
            {filteredMeals.length === 0 && (
              <p className="no-meals">V této kategorii nejsou žádná jídla.</p>
            )}
          </div>
        </>
      )}

      {activeTab === 'plan' && (
        <MealPlan
          plannedMeals={plannedMeals}
          meals={meals}
          onRemove={removeFromPlan}
          onMealClick={setSelectedMeal}
          onMoveMeal={moveMeal}
        />
      )}

      <AddMealModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddMeal={addMeal}
      />

      <MealDetailModal
        meal={selectedMeal}
        isOpen={selectedMeal !== null}
        onClose={() => setSelectedMeal(null)}
        onAddToPlan={() => {
          setMealToAdd(selectedMeal);
          setSelectedMeal(null);
        }}
        onEdit={() => {
          setMealToEdit(selectedMeal);
          setSelectedMeal(null);
        }}
        onDelete={deleteMeal}
      />

      <AddToPlanModal
        meal={mealToAdd}
        isOpen={mealToAdd !== null}
        onClose={() => setMealToAdd(null)}
        onAdd={addToPlan}
      />

      <EditMealModal
        meal={mealToEdit}
        isOpen={mealToEdit !== null}
        onClose={() => setMealToEdit(null)}
        onUpdateMeal={updateMeal}
        onDelete={deleteMeal}
      />
    </div>
  );
}

export default App;
