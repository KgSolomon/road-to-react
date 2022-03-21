import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (<li key={item.id}>{item.title}</li>)
        })}
      </ul>
    </div>
  );
}

export default App;
