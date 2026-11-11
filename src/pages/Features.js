import { Link } from 'react-router-dom';

// the list of features, shown with .map below
const features = [
  { icon: "🍎", title: "Meal Logging", text: "Write down what you eat and how many calories it has." },
  { icon: "🏃", title: "Exercise Tracking", text: "Save your workouts and how many minutes you trained." },
  { icon: "🚶", title: "Daily Activities", text: "Log walking, cycling, stretching or any other activity." },
  { icon: "📊", title: "Daily Summary", text: "See today's calories and active minutes added up for you." },
  { icon: "💪", title: "Workout Plans", text: "Follow ready plans for strength, cardio, HIIT and yoga." },
  { icon: "🌙", title: "Dark Mode", text: "Switch between light and dark themes at any time." },
];

const Features = () => {
  return (
    <div>
      <div className="page-header center">
        <h1>Features</h1>
        <p className="muted">Everything you need to keep track of a healthy routine.</p>
      </div>

      <div className="feature-grid">
        {features.map((f, i) => (
          <div key={i} className="feature">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p className="muted">{f.text}</p>
          </div>
        ))}
      </div>

      <section className="cta">
        <h2>Ready to start?</h2>
        <Link to="/tracker" className="btn">Open the Tracker</Link>
      </section>
    </div>
  );
};

export default Features;
