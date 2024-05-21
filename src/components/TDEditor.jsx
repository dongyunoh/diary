import { useState, useRef } from "react";
import "./TDEditor.css";

const TDEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="TDEditor">
      <input
        ref={contentRef}
        onKeyDown={onKeydown}
        value={content}
        onChange={onChangeContent}
        placeholder="운동 기록..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default TDEditor;
