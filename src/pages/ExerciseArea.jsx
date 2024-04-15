import Header from "../components/Header";
import Button from "../components/Button";
import ExerciseList from "../components/ExerciseList";

import { useNavigate } from "react-router-dom";

const ExerciseArea = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"부위 별 운동"}
        leftChild={<Button onClick={() => nav(-1)} text="뒤로가기" />}
      />
      <div>
        <ExerciseList />
      </div>
    </div>
  );
};

export default ExerciseArea;
