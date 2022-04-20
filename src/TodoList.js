import React from "react";
import TodoListItem from "./TodoListItem";
 
const todoList = [
    {
      title: "Complete Task 1",
      id: 1
    },
    {
      title: "Complete Task 2",
      id: 2
    },
    {
      title: "Complete Task 3",
      id: 3
    }
  ];

const TodoList = () => {
  return (
    <ul>
    {todoList.map((item) => (<TodoListItem key={item.id} todo={item} />))}
    </ul>
    
  );
}
 
export default TodoList;