import "./HealthDate.css";

export const HealthDate = ({ leftChild, rightChild }) => {
  return (
    <div className="HealthDate">
      <div className="date_left">{leftChild}</div>
      <div className="date_right">{rightChild}</div>
    </div>
  );
};

export default HealthDate;
