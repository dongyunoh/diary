import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Chest from "../pages/Chest";
import Back from "../pages/Back";
import TDHeader from "./TDHeader";
import TDEditor from "./TDEditor";




import "./ExerciseList.css";

const activeStyle = {
  color: "red",
  textDecoration: "underline",
};

const deactiveStyle = {
  color: "black",
  textDecoration: "none",
};

function ExerciseList() {
  // const nav = useNavigate();

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
      </div>
    </div>
  );
}

export default ExerciseList;
