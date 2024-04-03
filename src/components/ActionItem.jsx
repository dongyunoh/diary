import "./ActionItem.css";
import { getActionImage } from "../util/get-action-image";

const ActionItem = ({ actionId, actionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`ActionItem ${isSelected ? `ActionItem_on_${actionId}` : ""}`}
    >
      <img className="action_img" src={getActionImage(actionId)} />
      <div className="action_name">{actionName}</div>
    </div>
  );
};

export default ActionItem;
