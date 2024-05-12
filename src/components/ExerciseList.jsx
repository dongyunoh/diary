import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Chest from "../pages/Chest";
import Back from "../pages/Back";
// import ChestList from "./ChestList";

import Button from "./Button";

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
      <hr />

      <Routes>
        <Route path="/chest" element={<Chest />}></Route>
      </Routes>
    </div>
  );
}

export default ExerciseList;
