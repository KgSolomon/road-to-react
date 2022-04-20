import React from "react";

const AddTodoList = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        event.target.reset();
        props.onAddTodo(todoTitle);

    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input type='text' id='todoTitle' name='title'></input>
            <button type='submit'>Add</button>
        </form>
    );
}

export default AddTodoList;