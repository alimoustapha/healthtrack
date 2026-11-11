const StatCard = ({ value, label }) => {
  return (
    <div className="stat">
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
};

export default StatCard;
