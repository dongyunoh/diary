import "./TDItem.css";

const TDItem = () => {
  return (
    <div className="TDItem">
      <input type="checkbox" />
      <div className="content">Todo...</div>
      <div className="date">Date</div>
      <button>삭제 </button>
    </div>
  );
};

export default TDItem;
