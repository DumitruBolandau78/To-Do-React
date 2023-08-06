import { useState } from 'react';

import './App.css';
import FormAddGoal from './Components/FormAddGoal';
import GoalsList from './Components/GoalsList';
import Shortcut from './Components/UI/Shortcut';
import DeleteAll from './Components/UI/DeleteAll';
import CompleteAll from './Components/UI/CompleteAll';

import completeAllIcon from './assets/images/refresh.png';
import deleteAllIcon from './assets/images/recycle.png';

function App() {

  const [goals, setGoals] = useState(['Finish this project', 'Keep learn react', 'Make 10M $']);

  function deleteToDoHandler(index){
    setGoals(goals.filter((_, idx) => idx !== index));
  }

  function deleteAllItemsHandler(){
    setGoals([]);
  }

  return (
    <div className="App">
      <div className='App-inner'>
        <FormAddGoal goals={goals} setGoals={setGoals}></FormAddGoal>
        <Shortcut>
          <CompleteAll link={completeAllIcon}></CompleteAll>
          <DeleteAll deleteAllItemsHandler={deleteAllItemsHandler} link={deleteAllIcon}></DeleteAll>
        </Shortcut>
        <GoalsList deleteToDo={deleteToDoHandler} goals={goals}></GoalsList>
      </div>
    </div>
  );
}

export default App;
