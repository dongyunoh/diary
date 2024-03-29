import { getEmotionImage } from "../util/get-emotion-image";
import Button from "./Button";
import "./HealthItem.css";

const HealthItem = () => {
  const emotionId = 8;

  return (
    <div className="HealthItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(7)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">헬스 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"기록하기"} />
      </div>
    </div>
  );
};

export default HealthItem;
