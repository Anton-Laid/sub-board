import React from 'react';

const Checkbox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <label htmlFor={`checkbox-${index}`} className="contact__label-checkbox">
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
        className="record__checkbox"
      />
      {label}
    </label>
  );
};

export default Checkbox;
