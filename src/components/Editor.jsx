import ActionItem from "./ActionItem";
import Button from "./Button";
import "./Editor.css";
import HealthDate from "./HealthDate";

const actionList = [
  {
    actionId: 3,
    actionName: "가슴운동",
  },
  {
    actionId: 4,
    actionName: "등운동",
  },
  {
    actionId: 5,
    actionName: "하체운동",
  },
  {
    actionId: 6,
    actionName: "어깨운동",
  },
];

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <HealthDate
          leftChild={"운동한 날짜"}
          rightChild={<input type="date" />}
        />
      </section>
      <section className="action_section">
        <h4>상세운동</h4>
        <div className="action_list_wrapper">
          {actionList.map((item) => (
            <ActionItem key={item.actionId} {...item} />
          ))}
        </div>
      </section>
      <section className="action_text">
        <h4>이미지를 클릭하여 자신의 운동을 기록</h4>
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button text={"저장하기"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
