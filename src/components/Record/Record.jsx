import React, { useState } from 'react';
import { CHAT_ID, handleMessage, dataCeckbox } from '../../utils/constants';
import { useFormAndValidation } from '../../hooks/validation';
import { validatePhone, validateName } from '../../utils/validation';
import Checkbox from '../Checkbox/Checkbox';
import { postMessage } from '../../utils/Api';
import './Record.scss';
import checkMark from '../../images/popap/gif.gif';

const Record = ({ hendleClosePopup, notification, setNotification }) => {
  const { values, isValid, handleChange } = useFormAndValidation();
  const [data, setData] = useState(dataCeckbox);

  const handleCheckbox = (item) => {
    return item.map((i) => (i.checked ? i.name : ''));
  };

  const updateCheckStatus = (index) => {
    setData(
      data.map((item, currentIndex) => {
        return currentIndex === index
          ? { ...item, checked: !item.checked }
          : item;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postMessage(CHAT_ID, handleMessage(values, handleCheckbox(data)));
    setNotification(false);
  };

  return (
    <section className="record">
      {notification ? (
        <form className="record__form" onSubmit={handleSubmit}>
          <h2 className="record__title">Добро пожаловать!</h2>
          <label className="record__lable" htmlFor="record-name">
            Имя
            <input
              className="record__input"
              id="record-name"
              name="name"
              type="text"
              value={values.name || ''}
              minLength="2"
              maxLength="40"
              onChange={handleChange}
              required
              placeholder=""
            />
            <span
              className={`record__input-error  ${
                isValid ? '' : 'record__input-error_activ'
              }`}
            >
              {validateName(values.name).message}
            </span>
          </label>
          <label className="record__lable" htmlFor="record-email">
            Телефон
            <input
              className="record__input record__input-phone"
              id="record-phone"
              name="phone"
              type="number"
              required
              value={values.phone || ''}
              placeholder="+7(000)000-00-00"
              onChange={handleChange}
            />
            <span
              className={`record__input-error  ${
                isValid ? '' : 'record__input-error_activ'
              }`}
            >
              {validatePhone(values.phone).message}
            </span>
          </label>
          <div className="record__container-checkbox">
            {data.map((i, index) => {
              return (
                <Checkbox
                  key={i.id}
                  isChecked={i.checked}
                  checkHandler={() => updateCheckStatus(index)}
                  label={i.name}
                  index={index}
                />
              );
            })}
          </div>
          <textarea
            className="record__input-message"
            name="message"
            value={values.message || ''}
            rows="3"
            type="text"
            onChange={handleChange}
            placeholder=""
          />
          <p className="record__phone">
            Связаться по телефону: +7(926)155-70-11
          </p>
          <button
            className="record__btn-save"
            type="submit"
            disabled={
              !isValid ||
              validatePhone(values.phone).invalid ||
              validateName(values.name).invalid
            }
          >
            Записаться
          </button>{' '}
          <div className="record__cloce" onClick={hendleClosePopup} />
        </form>
      ) : (
        <section className="record__container-true">
          <h4 className="record__container_title">
            Спасибо за обращение! С вами свяжутся в ближайшее время
          </h4>
          <img
            className="record__container_img"
            src={checkMark}
            alt="галочка"
          />
          <div className="record__cloce" onClick={hendleClosePopup} />
        </section>
      )}
    </section>
  );
};

export default Record;
