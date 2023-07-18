import React from "react";
import "./Popap.scss";

const Popup = ({ popap, hendleClosePopup, children }) => {
  return (
    <div
      className={`popup ${popap ? "popup_opened" : ""}`}
      // onClick={(e) => closePopup(e, hendleClosePopup)}
    >
      {children}
    </div>
  );
};

export default Popup;
