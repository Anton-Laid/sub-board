import React from 'react';
import './Popap.scss';

const Popup = ({ open, hendleClosePopup, children }) => {
  return (
    <div
      className={`popup ${open ? 'popup_opened' : ''}`}
      // onClick={(e) => closePopup(e, hendleClosePopup)}
    >
      {children}
    </div>
  );
};

export default Popup;
