import "./TDList.css";
import TDItem from "./TDItem";
import { useState } from "react";

const TDList = ({ todos }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.includes(search));
  };

  const filteredTodos = getFilteredData();
  return (
    <div className="TDList">
      <h4>운동 리스트</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요.."
      />
      <div className="tds_wrapper">
        {filteredTodos.map((todo) => {
          return <TDItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default TDList;
