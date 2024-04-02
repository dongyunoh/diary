import "./Editor.css";
import HealthDate from "./HealthDate";

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <HealthDate
          leftChild={"운동한 날짜"}
          rightChild={<input type="date" />}
        />
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default Editor;
