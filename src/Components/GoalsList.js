import "./GoalsList.css";
import GoalItem from "./GoalItem";

function GoalsList({ goals, deleteToDo }) {
  return (
    <ul className="goal-list">
      {goals.length > 0 ? (
        goals.map((goal, index) => (
          <GoalItem  deleteToDo={deleteToDo} index={index} key={index} goal={goal}></GoalItem>
        ))
      ) : (
        <h2>No goals found</h2>
      )}
    </ul>
  );
}

export default GoalsList;
