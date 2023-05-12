import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { Add_todo, Delete_todo, Edit_todo, Iscomplit } from "./redux/action/TodoAction";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [newText, setNewText] = useState("");
  const [click, setClick] = useState(false);
  const [id, setID] = useState();
  const handleClick = (id) => {
    return setClick(!click), setID(id), dispatch(Edit_todo(id, newText));
  };

  return (
    <div className="App">
      <input type="text" onChange={(e) => setNewText(e.target.value)} />
      <button onClick={() => dispatch(Add_todo(newText))}>Add</button>
      {todos.map((el) => (
        <div>
          {el.id == id && click ? (
            <input type="text" onChange={(e) => setNewText(e.target.value)} />
          ) : (
            <div>
              <input type="checkbox" onClick={()=>dispatch(Iscomplit(el.id))} />
              <span style={el.isCompleted==true? {color:"green",textDecoration:"line-through"}:null}>{el.text}</span>
            </div>
          )}
          <button onClick={() => dispatch(Delete_todo(el.id))}>delete</button>
          <button onClick={() => handleClick(el.id)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
