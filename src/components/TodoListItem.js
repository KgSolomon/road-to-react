import React from "react";
import style from './TodoListItem.module.css';
import buttonRemove from "./xmark.svg"
import buttonComplete from "./check-mark.svg"
import PropTypes from 'prop-types';


const TodoListItem = ({todo, onRemoveTodo}) => {
    return (
        <li className={style.listItem}>
            {todo.fields.Title}
            <button className={style.buttonRemove} onClick={() => onRemoveTodo(todo.id)}><img className={style.svg} src={buttonRemove} alt='svg' /></button>
        </li>
    );
}

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired,
    onRemoveTodo: PropTypes.func.isRequired,
  }


export default TodoListItem;