
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { Add_todo, delete_todo } from './redux/action/TodosAction';


function App() {
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch()
  const[newText,setNewText]=useState('')
  return (
    <div className="App">
    <input type="text" onChange={(e)=>setNewText(e.target.value)} />
    <button onClick={()=>dispatch(Add_todo(newText))}>ADD</button>
    {todos.map((el)=><h3 onClick={()=>dispatch(delete_todo(el.id))}>{el.text}</h3>)}
    </div>
  );
}

export default App;
