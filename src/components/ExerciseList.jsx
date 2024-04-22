import "./ExerciseList.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

const ExerciseList = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="ExerciseList">
      <div className="select_bar">
        <div className="chest_body">
          <Button
            onClick={() => {
              setModal(!modal);
            }}
            text={"가슴"}
          />{" "}
          {modal === true ? <Modal /> : null}
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
