import { useState } from "react";
import ActionItem from "./ActionItem";
import Button from "./Button";
import HealthDate from "./HealthDate";

import "./Editor.css";

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

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    actionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <HealthDate
          leftChild={"운동한 날짜"}
          rightChild={
            <input
              name="createdDate"
              onChange={onChangeInput}
              value={getStringedDate(input.createdDate)}
              type="date"
            />
          }
        />
      </section>

      <section className="action_section">
        <h4>상세운동</h4>
        <div className="action_list_wrapper">
          {actionList.map((item) => (
            <ActionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "actionId",
                    value: item.actionId,
                  },
                })
              }
              key={item.actionId}
              {...item}
              isSelected={item.actionId === input.actionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>이미지를 클릭하여 자신의 운동을 기록</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어떘나요?"
        />
      </section>
      <section className="button_section">
        <Button text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"저장하기"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
