import { getActionImage } from "../util/get-action-image";
import Button from "./Button";
import "./HealthItem.css";
import { useNavigate } from "react-router-dom";

const HealthItem = ({ id, actionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="HealthItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${actionId}`}
      >
        <img src={getActionImage(2)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id})`)} text={"수정하기"} />
      </div>
    </div>
  );
};

export default HealthItem;
