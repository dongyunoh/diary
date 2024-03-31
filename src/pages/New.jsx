import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        title={"운동 기록하기"}
        leftChild={<Button text={"< 뒤로가기"} />}
      />
      <Editor />
    </div>
  );
};

export default New;
