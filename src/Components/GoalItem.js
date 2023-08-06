import "./GoalItem.css";
import deleteImg from "../assets/images/delete.png";
import checkedImg from "../assets/images/check.png";
import listIcon from "../assets/images/list-icon.png";

function GoalItem({ goal, deleteToDo, index }) {

  return (
    <li className="goal-item">
      <span>
        <img src={listIcon} alt="list-icon" /> {goal}
      </span>
      <div>
        <img
          src={deleteImg}
          onClick={() => {
            deleteToDo(index);
          }}
          alt="delete"
        />{" "}
        <img src={checkedImg} alt="check" />
      </div>
    </li>
  );
}

export default GoalItem;
