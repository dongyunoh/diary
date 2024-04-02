import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();
  return (
    <div>
      <Header
        title={"운동 기록하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
