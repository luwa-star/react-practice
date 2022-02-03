import React from "react";
import "./GoalList.css";
import GoalItem from "../GoalItem/GoalItem";

const GoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem} >
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};
export default GoalList;
