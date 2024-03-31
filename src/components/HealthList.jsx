import "./HealthList.css";
import Button from "./Button";
import HealthItem from "./HealthItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HealthList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    });
  };

  const sortedData = getSortedDate();

  return (
    <div className="HealthList">
      <div className="menu_bar">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button onClick={() => nav("/new")} text={"운동 기록하기"} />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <HealthItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default HealthList;
