import React, { useState } from "react";
import Button from "../UI/Button";
import "./GoalInput.css";

const GoalInput = (props) => {
  const [inputText, setInputText] = useState("");
  const [isValid, setIsValid] = useState(true);
  const inputTextHandler = (event) => {
    if (inputText.trim().length > 0) {
      setIsValid(true); //to reset default style
    }
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(inputText);
    setInputText("");
  };
  return (
    <form className="goal-form" onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid' :''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          value={inputText}
          placeholder="Create new goal..."
          onChange={inputTextHandler}
        />
      </div>

      <div className="button--wrapper">
        <Button type="submit">Add Goal</Button>
      </div>
    </form>
  );
};
export default GoalInput;
