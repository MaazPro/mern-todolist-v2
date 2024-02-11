import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { getAllToDo, addToDo, deleteTodo } from "./utils/HandleApi";
function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);
  function updateMode(_id, text){
    setIsUpdating(true);
    setText(text);
    setToDo(_id);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add Todos"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          {/* <div className="add" onClick={()=>addToDo(text, setText, setToDo)} >Add</div> */}
          <div
            className="add"
            onClick={() => addToDo(text, setText, setToDo)}>
            Add
          </div>
          {isUpdating ? "Updating" : ""}
        </div>
        <div className="list">
          {toDo.map((item)=> <ToDo
          key={item._id} 
          text={item.text}
          deleteToDo={()=> deleteTodo(item._id, setToDo)}
          />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;
