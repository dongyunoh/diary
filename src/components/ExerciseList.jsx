import { useState } from "react";
import "./ExerciseList.css";

const ExerciseList = () => {
  const [choice, setChoice] = useState("chest");

  const fruits = ["chest", "back", "button", "shouder"];

  const options = fruits.map((fruit) => {
    return <option value={fruit}>{fruit}</option>;
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
    </div>
  );
};

export default ExerciseList;
