import React from "react";
 
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
    {todoList.map(item => (<li key={item.id}>{item.title}</li>))}
    </ul>
    
  );
}
 
export default TodoList;