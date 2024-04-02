import "./ActionItem.css";
import { getActionImage } from "../util/get-action-image";

const ActionItem = ({ actionId, actionName }) => {
  return (
    <div className="ActionItem">
      <img className="action_img" src={getActionImage(actionId)} />
      <div className="action_name">{actionName}</div>
    </div>
  );
};

export default ActionItem;
