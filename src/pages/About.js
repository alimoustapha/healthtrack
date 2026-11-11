// the 3 steps shown in "How it works"
const steps = [
  { number: 1, title: "Log", text: "Add your meals, exercise and activities from the Tracker page." },
  { number: 2, title: "Follow", text: "Pick a workout plan and add it to your day with one click." },
  { number: 3, title: "Improve", text: "Check your daily summary and build better habits over time." },
];

const About = () => {
  return (
    <div>
      <div className="page-header center">
        <h1>About HealthTrack</h1>
        <p className="muted">A simple wellness website made for students and busy people.</p>
      </div>

      <div className="two-columns">
        <div className="box">
          <h2>Our Mission</h2>
          <p>
            Many people want to eat better and move more, but they forget what they
            ate or how much they trained. HealthTrack makes it easy to write everything
            down in a few seconds and see the full picture of your day.
          </p>
        </div>

        <div className="box">
          <h2>Who is it for?</h2>
          <p>
            Students, beginners at the gym, and anyone who wants a free and simple
            tracker without creating an account. Your data stays in your own browser.
          </p>
        </div>
      </div>

      <h2 className="section-title center">How it works</h2>
      <div className="steps">
        {steps.map((s) => (
          <div key={s.number} className="step">
            <div className="step-number">{s.number}</div>
            <h3>{s.title}</h3>
            <p className="muted">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
