import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Chest from "../pages/Chest";
import Back from "../pages/Back";
import TDHeader from "./TDHeader";
import TDEditor from "./TDEditor";
import { useState } from "react";

import "./ExerciseList.css";
import TDList from "./TDList";

const activeStyle = {
  color: "red",
  textDecoration: "underline",
};

const deactiveStyle = {
  color: "black",
  textDecoration: "none",
};

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "벤치프레스",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "데드리프트",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "스쿼트",
    date: new Date().getTime(),
  },
];

function ExerciseList() {
  // const nav = useNavigate();

  const [todos, setTodos] = useState(mockData);

  return (
    <div className="exerciseList">
      <div className="List_link">
        <p>
          <NavLink
            to="/chest"
            style={({ isActive }) => {
              return isActive ? activeStyle : deactiveStyle;
            }}
          >
            Chest
          </NavLink>
        </p>
        <p>
          <NavLink
            to="/Back"
            className={({ isActive }) => {
              return isActive ? "orange" : "";
            }}
          >
            Back
          </NavLink>
        </p>
        <p>
          <NavLink></NavLink>
        </p>
      </div>

      <div className="todoList">
        <TDHeader />
        <TDEditor />
        <TDList />
      </div>
    </div>
  );
}

export default ExerciseList;
