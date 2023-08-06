
import { useState } from 'react';
import './FormAddGoal.css';

function FormAddGoal({ setGoals, goals }){

    const [goal, setGoal] = useState('');

    function getNewValue(e){
        setGoal(e.target.value);
    }

    function clickHandler(){
        goal && setGoals([goal, ...goals]);
    }

    function submitHandler(e){
        e.preventDefault();
        setGoal('');
    }

    return(
        <form onSubmit={submitHandler} className='form-add-goal'>
            <div className='form-add-goal__title'>
                <h4>Course Goal</h4>
            </div>
            <div className='form-add-goal__input'>
                <input value={goal} onChange={getNewValue} placeholder='Write your goal...'></input>
            </div>
            <div className='form-add-goal__btn'>
                <button onClick={clickHandler}>Add Goal</button>
            </div>
        </form>
    )
}

export default FormAddGoal;