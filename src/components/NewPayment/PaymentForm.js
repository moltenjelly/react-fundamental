import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = () => {
  const [objectState, setObjectState] = useState({
    password: "",
    radio: "",
    color: "#ffffff",
  });

  const inputTypePasswordChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      password: event.target.value,
    }));
  };
  const inputTypeRadioChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      radio: event.target.value,
    }));
  };
  const inputTypeColorChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };
  const buttonSubmitHandler = (event) => {
    console.log("password", objectState.password);
    console.log("radio", objectState.radio);
    console.log("color", objectState.color);
  };

  return (
    <form>
      <div className="new-payment__controls">
        <div className="new-payment__control">
          <label>비밀번호</label>
          <input
            type="password"
            value={objectState.password}
            onChange={inputTypePasswordChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>라디오</label>
          <input
            type="radio"
            value={objectState.radio}
            onChange={inputTypeRadioChangeHandler}
          />
        </div>
        <div className="new-payment__control">
          <label>Color</label>
          <input
            type="color"
            value={objectState.color}
            onChange={inputTypeColorChangeHandler}
          />
        </div>
      </div>
      <div className="new-payment__actions">
        <button type="button" onClick={buttonSubmitHandler}>
          결제 추가
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
