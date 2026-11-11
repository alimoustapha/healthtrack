// a small box with a big number and a label (used on Home and Tracker)
const StatCard = ({ value, label }) => {
  return (
    <div className="stat">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;
