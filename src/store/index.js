import { createStore } from "redux";
import {createSlice, configureStore} from "@reduxjs/toolkit"
const initialState = {
  counter: 0,
  showCounter: true,
};


const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers:{
    increment(state){
      state.counter++; //can be mutated becoz toolkit uses wrappers internally and its safe
      //but in previous cases it was not good to be mutated becoz of being a reference variable redux might 
      // not be able to detect the change in data and might not update the state
    },
    decrement(state){
      state.counter--;
    },
    increase(state,action){
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    }
  }
})
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: ++state.counter, showCounter: state.showCounter };
//   }
//   if (action.type === "decrement") {
//     return { counter: --state.counter, showCounter: state.showCounter };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }
//   return state;
// };



export const counterActions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;
