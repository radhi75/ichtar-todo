import { ADD_TODO, DELETE_TODO } from "../actionTypes/TodosTypes"

export const Add_todo=(newText)=>{
    return{type:ADD_TODO,payload:newText}
}
export const delete_todo=(id)=>{
    return{type:DELETE_TODO,payload:id}
}