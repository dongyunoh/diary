import "./ExerciseList.css";
import Button from "./Button";
import Modal from "./Modal";
import { useState } from "react";

import ChestList from "./ChestList";
import Main_Data from "./Main_Data";

const ExerciseList = () => {
  const [modal, setModal] = useState(false);

  const [content, setContent] = useState();

  const handleClickButton = (e) => {
    const [name] = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <ChestList />,
  };

  console.log(content);

  return (
    <div className="ExerciseList">
      <div className="select_bar">
        <Container>
          {Main_Data.map((data) => {
            return (
              <Button
                onClick={handleClickButton}
                name={data.name}
                key={data.id}
              >
                {data.text}
              </Button>
            );
          })}
        </Container>
        {content && <ChestList>{selectComponent[content]}</ChestList>}
      </div>
    </div>
  );
};

export default ExerciseList;
