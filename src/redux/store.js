import { createStore } from "redux";
import TodosReducer from "./reducer/TodosReducer";


const store = createStore(
   TodosReducer , /* preloadedState, */
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store