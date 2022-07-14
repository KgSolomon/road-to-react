import { useRef, useEffect } from "react"
import styles from "./InputWithLabel.module.css"
import PropTypes from 'prop-types';

function InputWithLabel({
    id,
    todoTitle,
    type = "text",
    handleTitleChange,
    children,
    isFocused,
  }) {
    const inputRef = useRef()
    useEffect(() => {
      if (isFocused && inputRef.current) {
        inputRef.current.focus()
      }
    })
    return (
        <div className={styles.container}>
          <label htmlFor={todoTitle}>{children}</label>
          <input
            ref={inputRef}
            type={type}
            id={id}  
            value={todoTitle}
            onChange={handleTitleChange}
            className={styles.input}
            placeholder="Type Here"
          />
        </div>
      )
    }
    
    InputWithLabel.prototypes = {
      todoTitle: PropTypes.string,
      handleTitleChange: PropTypes.object,
      children: PropTypes.string,
    };

export default InputWithLabel