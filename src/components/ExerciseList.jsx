import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

import "./ExerciseList.css";

const ExerciseList = () => {
  const [choice, setChoice] = useState("chest");
  const nav = useNavigate();

  const fruits = ["chest", "back", "button", "shouder"];

  const options = fruits.map((fruit, idx) => {
    return (
      <option key={idx} value={fruit}>
        {fruit}
      </option>
    );
  });
  console.log(choice);
  const handleFruit = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div className="exerciseList">
      <select value={choice} onChange={handleFruit}>
        {options}
      </select>
      {choice}
      <Button onClick={() => nav("/chest")} text="chest" />
    </div>
  );
};

export default ExerciseList;
