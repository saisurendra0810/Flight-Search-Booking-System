function ModuleCard({ title, onClick }) {
  return (
    <div className="module-card" onClick={onClick}>
      <h3>{title}</h3>
    </div>
  );
}

export default ModuleCard;