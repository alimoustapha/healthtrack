import { useState } from 'react';
import workouts from '../data/workouts.json';
import WorkoutCard from '../components/WorkoutCard';

const Workouts = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const shown = workouts.filter((w) => {
    const matchName = w.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || w.category === category;
    return matchName && matchCategory;
  });

  return (
    <div>
      <div className="page-header">
        <h1>Workout Plans</h1>
        <p className="muted">Pick a plan, open it to see the exercises, and add it to your tracker.</p>
      </div>

      <div className="toolbar">
        <input className="search" placeholder="Search workouts..." value={search}
          onChange={(e) => setSearch(e.target.value)} />

        <div className="filters">
          {["All", "Strength", "Cardio", "HIIT", "Flexibility"].map((c) => (
            <button key={c} className={category === c ? "filter active" : "filter"}
              onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="cards">
        {shown.map((w) => (
          <WorkoutCard
            key={w.id}
            id={w.id}
            name={w.name}
            category={w.category}
            level={w.level}
            minutes={w.minutes}
            calories={w.calories}
          />
        ))}
      </div>

      {shown.length === 0 && <p className="muted center">No workouts match your search.</p>}
    </div>
  );
};

export default Workouts;
