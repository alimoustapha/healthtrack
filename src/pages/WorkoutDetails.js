import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import workouts from '../data/workouts.json';

// this is the dynamic page: the same page shows a different workout for each id
const WorkoutDetails = () => {
  // read the id from the link, e.g. /workouts/3 gives id = "3"
  const { id } = useParams();
  const [message, setMessage] = useState("");

  // find the workout with this id (the id in the link is text, so we use Number)
  const workout = workouts.find((w) => w.id === Number(id));

  // if no workout has this id
  if (!workout) {
    return (
      <div className="center">
        <h1>Workout not found</h1>
        <Link to="/workouts" className="btn">Back to workouts</Link>
      </div>
    );
  }

  // save this workout as an "Exercise" log in the tracker
  const addToTracker = () => {
    const entries = JSON.parse(localStorage.getItem("entries")) || [];
    const newEntry = {
      id: Date.now(),
      type: "Exercise",
      name: workout.name,
      value: workout.minutes,
      date: new Date().toLocaleDateString("en-CA"),
    };
    localStorage.setItem("entries", JSON.stringify([newEntry, ...entries]));
    setMessage("Added to your tracker for today!");
  };

  return (
    <div>
      <Link to="/workouts" className="back-link">← All workouts</Link>

      <div className="details-header">
        <span className="tag">{workout.category}</span>
        <h1>{workout.name}</h1>
        <p>{workout.description}</p>

        <div className="workout-info big">
          <span>⏱ {workout.minutes} min</span>
          <span>🔥 {workout.calories} kcal</span>
          <span>📈 {workout.level}</span>
        </div>
      </div>

      <div className="box">
        <h2>Exercises</h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Reps / Time</th>
            </tr>
          </thead>
          <tbody>
            {workout.exercises.map((ex, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{ex.name}</td>
                <td>{ex.sets}</td>
                <td>{ex.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="buttons">
          <button className="btn" onClick={addToTracker}>+ Add to my tracker</button>
          <Link to="/tracker" className="btn btn-outline">Open tracker</Link>
        </div>
        {message && <p className="success">{message}</p>}
      </div>
    </div>
  );
};

export default WorkoutDetails;
