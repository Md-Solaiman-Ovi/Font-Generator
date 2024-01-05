
// // state 
// // action 
// // reducer
// // store

// import { createStore } from "@reduxjs/toolkit"

// // CONSTANTS
// const INCREMENT = 'INCREMENT'
// const DECREMENT = 'DECREMENT'
// const RESET = 'RESET'
// // STATE
// const intialState = {
//     count: 0
// }
// // ACTION 
// const incrementCounterAction = () =>{
//     return {
//         type: INCREMENT,

//     }
// }
// const decrementCounterAction = () =>{
//     return {
//         type: DECREMENT,

//     }
// }
// const resetCounterAction = () =>{
//     return {
//         type: RESET,

//     }
// }
// // REDUCER
// const counterReducer = (state=intialState, action:any) =>{
//     switch (action.type) {
//         case INCREMENT:
//             return {
//                 ...state,
//                 count : state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count : state.count - 1
//             }
//         case RESET:
//             return {
//                 ...state,
//                 count: 0
//             }
    
//         default:
//            state;
//     }
// }

// // STORE
// const store = createStore(counterReducer);
// store.subscribe(()=>{
//     console.log(store.getState());
// })

// store.dispatch(incrementCounterAction)
// store.dispatch(decrementCounterAction)
// store.dispatch(resetCounterAction)