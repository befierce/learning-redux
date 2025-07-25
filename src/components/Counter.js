import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {counterActions} from "../store/index"

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);//acts as subscription to the redux store
  const show = useSelector(state => state.showCounter)
  const increaseHandler = ()=>{
    dispatch(counterActions.increase(5))//this is the custom handler we can also take different 
    // values from the input without hardcoding the reducer function
  }
  
  const incrementHandler = ()=>{
    console.log("clicked")
    dispatch(counterActions.increment()) 
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
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
