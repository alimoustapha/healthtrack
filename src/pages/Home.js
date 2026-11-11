import { Link } from 'react-router-dom';
import hero from '../assets/hero.svg';
import workouts from '../data/workouts.json';
import WorkoutCard from '../components/WorkoutCard';
import StatCard from '../components/StatCard';

const Home = () => {
  const entries = JSON.parse(localStorage.getItem("entries")) || [];

  const today = new Date().toLocaleDateString("en-CA");
  const todayEntries = entries.filter((e) => e.date === today);

  let calories = 0;
  let minutes = 0;
  todayEntries.forEach((e) => {
    if (e.type === "Meal") calories += Number(e.value);
    else minutes += Number(e.value);
  });

  const featured = workouts.slice(0, 3);

  return (
    <div>
      <section className="hero">
        <div className="hero-text">
          <span className="eyebrow">Your personal wellness tracker</span>
          <h1>Build healthy habits with <span>HealthTrack</span></h1>
          <p>Log your meals, workouts and daily activities, follow ready workout plans, and watch your progress every day.</p>
          <div className="buttons">
            <Link to="/tracker" className="btn">Start Tracking</Link>
            <Link to="/workouts" className="btn btn-light">Browse Workouts</Link>
          </div>
        </div>
        <img src={hero} alt="daily activity rings" className="hero-img" />
      </section>

      <section className="section">
        <h2 className="section-title">Today's Summary</h2>
        <div className="stats">
          <StatCard value={calories} label="Calories eaten (kcal)" />
          <StatCard value={minutes} label="Active minutes" />
          <StatCard value={todayEntries.length} label="Things logged today" />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">Popular Workouts</h2>
          <Link to="/workouts" className="see-all">See all →</Link>
        </div>
        <div className="cards">
          {featured.map((w) => (
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
      </section>

      <section className="cta">
        <h2>Small steps every day make a big difference.</h2>
        <Link to="/tracker" className="btn">Log your first meal</Link>
      </section>
    </div>
  );
};

export default Home;
