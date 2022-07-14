import React from "react";
import InputWithLabel from "./InputWithLabel"
import styles from "./AddTodoForm.module.css"
import PropTypes from 'prop-types';

const AddTodoList = ({onAddTodo}) => {

    const [todoTitle, setTodoTitle] = React.useState("");

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        setTodoTitle("");

    }

    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel id='todoTitle' todoTitle={todoTitle} handleTitleChange={handleTitleChange} isFocused></InputWithLabel>
            
            <button type='submit' className={styles.button}>Add</button>
        </form>
    );
}

AddTodoList.propTypes = {
    onAddTodo: PropTypes.func,
};



export default AddTodoList;