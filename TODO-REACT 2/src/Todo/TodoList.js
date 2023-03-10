import React from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function TodoList(props) { //обращаемся к объекту Props у которого есть массив
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo}
                 key={todo.id} index={index} 
                 onChange={props.onToggle} />
            })}
        </ul>
    )
}


export default TodoList