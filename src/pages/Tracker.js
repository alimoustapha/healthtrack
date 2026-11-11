import { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';

const today = new Date().toLocaleDateString("en-CA");

const demoEntries = [
  { id: 1, type: "Meal", name: "Oatmeal with banana", value: 350, date: today },
  { id: 2, type: "Exercise", name: "Morning run", value: 30, date: today },
  { id: 3, type: "Activity", name: "Walk to university", value: 20, date: today },
  { id: 4, type: "Meal", name: "Chicken salad", value: 450, date: today },
];

const Tracker = () => {
  const [type, setType] = useState("Meal");
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [date, setDate] = useState(today);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filter, setFilter] = useState("All");

  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || demoEntries
  );

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!name || !value || !date) {
      setError("Please fill in all the fields.");
      return;
    }
    if (value <= 0) {
      setError("The number must be bigger than 0.");
      return;
    }
    if (type === "Meal" && value > 3000) {
      setError("A meal can't be more than 3000 kcal.");
      return;
    }
    if (type !== "Meal" && value > 600) {
      setError("Minutes can't be more than 600.");
      return;
    }

    const newEntry = {
      id: Date.now(),
      type: type,
      name: name,
      value: Number(value),
      date: date,
    };
    setEntries([newEntry, ...entries]);
    setError("");
    setSuccess(`${type} "${name}" was added.`);
    setName("");
    setValue("");
  };

  const handleClear = () => {
    setType("Meal");
    setName("");
    setValue("");
    setDate(today);
    setError("");
    setSuccess("");
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  const todayEntries = entries.filter((e) => e.date === today);
  let calories = 0;
  let minutes = 0;
  todayEntries.forEach((e) => {
    if (e.type === "Meal") calories += e.value;
    else minutes += e.value;
  });

  const shownEntries = filter === "All" ? entries : entries.filter((e) => e.type === filter);

  return (
    <div>
      <div className="page-header">
        <h1>Daily Tracker</h1>
        <p className="muted">Log your meals, exercise and activities. Everything is saved in your browser.</p>
      </div>

      <div className="stats">
        <StatCard value={calories} label="Calories eaten today" />
        <StatCard value={minutes} label="Active minutes today" />
        <StatCard value={entries.length} label="Total logs" />
      </div>

      <div className="two-columns">
        <form className="box" onSubmit={handleSubmit}>
          <h2>Add a Log</h2>

          <label htmlFor="type">Type</label>
          <select id="type" className="select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Meal">Meal</option>
            <option value="Exercise">Exercise</option>
            <option value="Activity">Activity</option>
          </select>

          <label htmlFor="name">Name</label>
          <input id="name" placeholder={type === "Meal" ? "e.g. Chicken salad" : "e.g. Running"}
            value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="value">{type === "Meal" ? "Calories (kcal)" : "Duration (minutes)"}</label>
          <input id="value" type="number" placeholder={type === "Meal" ? "e.g. 450" : "e.g. 30"}
            value={value} onChange={(e) => setValue(e.target.value)} />

          <label htmlFor="date">Date</label>
          <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <div className="buttons">
            <button type="submit" className="btn">Add {type}</button>
            <button type="button" className="btn btn-outline" onClick={handleClear}>Clear</button>
          </div>
        </form>

        <div className="box">
          <h2>My Logs</h2>

          <div className="filters">
            {["All", "Meal", "Exercise", "Activity"].map((f) => (
              <button key={f} className={filter === f ? "filter active" : "filter"}
                onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          {shownEntries.length === 0 && <p className="muted">Nothing logged yet.</p>}

          <ul className="entry-list">
            {shownEntries.map((e) => (
              <li key={e.id}>
                <span className={"type-dot " + e.type.toLowerCase()}>{e.type[0]}</span>
                <div className="entry-text">
                  <b>{e.name}</b>
                  <p className="muted">{e.type} · {e.date}</p>
                </div>
                <span className="entry-value">
                  {e.value} {e.type === "Meal" ? "kcal" : "min"}
                </span>
                <button className="delete-btn" onClick={() => handleDelete(e.id)}>✕</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
