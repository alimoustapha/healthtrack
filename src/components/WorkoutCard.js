import { Link } from 'react-router-dom';

const WorkoutCard = ({ id, name, category, level, minutes, calories }) => {
  return (
    <div className="card workout-card">
      <span className="tag">{category}</span>
      <h3>{name}</h3>

      <div className="workout-info">
        <span>⏱ {minutes} min</span>
        <span>🔥 {calories} kcal</span>
        <span>📈 {level}</span>
      </div>

      <Link to={`/workouts/${id}`} className="btn btn-small">View details</Link>
    </div>
  );
};

export default WorkoutCard;
