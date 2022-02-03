import React, { useState } from "react";
import "./App.css";
import GoalInput from "./Components/GoalInput/GoalInput";
import GoalList from "./Components/GoalList/GoalList";

function App() {
  const [goals, setGoals] = useState([
    { text: "Complete React Course", id: "G1" },
    { text: "Get Enyata Laptop", id: "G2" },
  ]);
  const addGoalItem = (enteredText) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.push({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  const deleteHandler = (goalId) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let goalContent = (
    <p
      style={{
        textAlign: "center",
        backgroundColor: "rgb(250, 249, 249)",
        width: "60vw",
        padding: "1rem",
      }}
    >
      {" "}
      No goals found. Maybe add one?
    </p>
  );
  if (goals.length > 0) {
    goalContent = <GoalList items={goals} onDeleteItem={deleteHandler} />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="goal--header">Course Goals</h1>
      </header>
      <GoalInput onAddGoal={addGoalItem} />
      {goalContent}
    </div>
  );
}

export default App;
