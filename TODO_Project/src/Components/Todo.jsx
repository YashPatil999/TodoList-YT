import { useState } from "react";
import TodoItem from "./TodoItem";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);
 
  return (
    <div>
      <Form/>
      {todos.map((item)=>(
        <TodoItem key={item} item={item}/>
      ))}
    </div>
  );
}
