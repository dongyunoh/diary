import "./ExerciseList.css";
import Button from "./Button";

const ExerciseList = () => {
  return (
    <div className="ExerciseList">
      <div className="select_bar">
        <div className="chest_body">
          <Button onClick={() => {}} text={"가슴"} />
        </div>
        <div className="back_body">
          <Button onClick={() => {}} text={"등"} />
        </div>
        <div className="lower_body">
          <Button onClick={() => {}} text={"하체"} />
        </div>
        <div className="shoulder_body">
          <Button onClick={() => {}} text={"어깨"} />
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
