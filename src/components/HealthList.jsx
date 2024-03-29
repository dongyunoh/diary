import "./HealthList.css";
import Button from "./Button";

const HealthList = () => {
  return (
    <div className="HealthList">
      <div className="menu_bar">
        <select>
          <option value={"homest"}>홈 트레이닝</option>
          <option value={"healthest"}>헬스장</option>
        </select>
        <Button text={"운동 기록하기"} />
      </div>
      <div className="list_wrapper"></div>
    </div>
  );
};

export default HealthList;
