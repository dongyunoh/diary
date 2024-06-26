import "./App.css";

import { useReducer, useRef, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Edit from "./pages/Edit";
import ExerciseArea from "./pages/ExerciseArea";
import Chest from "./pages/Chest";
import Back from "./pages/Back";

const mockData = [
  {
    id: 1,
    createdDate: new Date("2024-3-18").getTime(),
    emotionId: 1,
    content: "1번 헬스 내용",
  },
  {
    id: 2,
    createdDate: new Date("2024-3-17").getTime(),
    emotionId: 2,
    content: "2번 헬스 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-2-09").getTime(),
    emotionId: 3,
    content: "3번 헬스 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(5);

  // 새로운 기록 추가
  const onCreate = (createdDate, actionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        actionId,
        content,
      },
    });
  };

  //기록 수정하기.
  const onUpdate = (id, createdDate, actionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        actionId,
        content,
      },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/exercise" element={<ExerciseArea />} />
            <Route path="/chest" element={<Chest />} />
            <Route path="/back" element={<Back />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
