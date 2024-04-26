import { getPressImage } from "../util/get-press-image";
import { useState } from "react";

import "./Modal.css";

const Modal = () => {
  // const [chestBtn, setChestBtn] = useState("가슴운동");

  return (
    <div className="Modal">
      <div className={`img_section img_section_${actionId}`}>
        <img src={getPressImage(0)} />
      </div>
    </div>
  );
};

export default Modal;

//<a href="https://kr.lovepik.com/images/png-the-immortal.html">바벨 Png vectors by Lovepik.com</a>
