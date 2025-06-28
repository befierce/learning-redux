import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
const Counter = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const counter = useSelector(state => state.counter);//acts as subscription to the redux store

  const increaseHandler = ()=>{
    dispatch({type:'increase', amount:5})//this is the custom handler we can also take different 
    // values from the input without hardcoding the reducer function
  }
  
  const incrementHandler = ()=>{
    console.log("clicked")
    dispatch({type: 'increment'})
  }

  const decrementHandler = ()=>{
    dispatch({type: 'decrement'})
  }

  const toggleCounterHandler = () => {
    if(show === true){
      setShow(false);
    }
    if(show === false){
      setShow(true)
    }
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>
          increment
        </button>

        <button onClick={increaseHandler}>
          increment by 5
        </button>
        <button onClick={decrementHandler}>
          decrement
        </button>
        
        
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
