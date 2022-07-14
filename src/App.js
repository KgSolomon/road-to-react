import { useState, useEffect } from 'react';
import './App.module.css';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [todoList, setTodoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const addTodo = (newTodo) => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`, {
      method: 'POST',
      headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Title: newTodo.title.trim(),
            },
          },
        ],
      }),
    })
    .then((result) => {
      return result.json()
    })
    .then((result) => {  
      setTodoList([...todoList, result.records[0]])
    })
    .catch((error) => {
      console.log(error);
    })
  }


  useEffect(() => {
    fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/default?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}` },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result.records);
        setTodoList(result.records);
        setIsLoading(false);
      });
      
      
  }, [])


  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList))
    }
  }, [todoList, isLoading])


  const removeTodo = (id) => {
    fetch(`${`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/`}${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then(function () {
        const newTodoList = todoList.filter((todoItem) => id !== todoItem.id)
        setTodoList(newTodoList)
      })
      .catch((e) => console.log(e))
      
  };


  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={
            <>
              <NavBar/>
              <Home />
              <Footer />
            </>
            }
          />
        <Route path="/new" element={
            <>
              <NavBar/>
              <h1>New Todo List</h1>
              <AddTodoForm onAddTodo={addTodo}/>
             { isLoading ? <p>Loading...</p> : <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>}
              <Footer />
            </>
          } />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
