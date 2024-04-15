import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  const onSubmit = (input) => {
    onCreate(input.createdDate, input.actionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"운동 기록하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
