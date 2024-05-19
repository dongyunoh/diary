import "./TDList.css";
import TDItem from "./TDItem";

const TDList = () => {
  return (
    <div className="TDList">
      <h4>운동 리스트</h4>
      <input placeholder="검색어를 입력하세요.." />
      <div className="tds_wrapper">
        <TDItem />
        <TDItem />
        <TDItem />
      </div>
    </div>
  );
};

export default TDList;
