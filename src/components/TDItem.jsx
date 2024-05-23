import "./TDItem.css";

const TDItem = ({ id, isDone, content, date }) => {
  return (
    <div className="TDItem">
      <input readOnly checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button>삭제</button>
    </div>
  );
};

export default TDItem;
