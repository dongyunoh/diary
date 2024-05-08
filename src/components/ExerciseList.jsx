import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Chest from "../pages/Chest";
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
          to="/login"
          className={({ isActive }) => {
            return isActive ? "orange" : "";
          }}
        >
          Login
        </NavLink>
      </p>
      <hr />

      <Routes>
        <Route path="/chest" element={<Chest />}></Route>
      </Routes>
      {/* <div className="exercies_button">
        <div className="chest">
          <Button onClick={() => nav("/chest")} text="chest" />
        </div>
        <div className="back">
          <Button onClick={() => nav("/back")} text="back" />
        </div>
      </div>
      <div className="exercies_screen"></div> */}
    </div>
  );
}

export default ExerciseList;
