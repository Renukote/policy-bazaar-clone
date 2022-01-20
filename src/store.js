import { createStore,combineReducers,applyMiddleware,compose } from "redux";

//import { reducer } from "./reducer";
//import {reducer as CounterReducer} from "../features/Counter/reducer"
import thunk from "redux-thunk"
const rootReducer=combineReducers({
   //counterState:CounterReducer,
   

})

export const store=createStore(rootReducer,
   // applyMiddleware(thunk)
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__()),
    // window.__REDUX_DEVTOOLS_EXTENSION__()
     )
console.log(store.getState())