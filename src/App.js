import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState ([])

  const getItem = (item) => {
    setTodo((prevState)=>{
      return [...prevState, item]
    })
  }

  const getCompleted = (id, editedItem) => {
    setTodo((prevState)=>{
      return prevState.map((item, index) => {
        if (index === id) {
          return editedItem;
        } else {
          return item;
        }
      });
    })
  }
  const handleDelete = (id) => {
    setTodo((prevState) => {
      return prevState.filter((_, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="todo">
      <AddTodo item={getItem}/>
      {todo&&todo.map((todo, index)=>(
          <TodoItem id={index} item={todo} completed={getCompleted} 
          key={index}
          onDelete={handleDelete}/>
      ))}
    </div>
  );
}

export default App;
