import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./HealthItem.css";
import { useNavigate } from "react-router-dom";

const HealthItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div className="HealthItem">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(7)} />
      </div>
      <div onClick={() => nav(`/diary/${id}`)} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button onClick={() => nav(`/edit/${id})`)} text={"기록하기"} />
      </div>
    </div>
  );
};

export default HealthItem;
