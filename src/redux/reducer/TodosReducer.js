import { ADD_TODO, DELETE_TODO } from "../actionTypes/TodosTypes";

const initialState = {
    todos:[
        {id:Math.random(),text:"learn redux",isComplit:false},
        {id:Math.random(),text:"learn react",isComplit:false},
        {id:Math.random(),text:"learn Dom",isComplit:false},
    ]
}

const TodosReducer= (state = initialState, { type, payload }) => {
  
 switch (type) {
    case ADD_TODO:
        const newtodo={
            id:Math.random(),
            text:payload,
            isComplit:false
        }
       return{...state,todos:[...state.todos,newtodo]}
 case DELETE_TODO:
    return{...state,todos:state.todos.filter((el)=>el.id!==payload)}
    default:
        return state
 }
  
}
export default TodosReducer