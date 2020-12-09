import React from "react";
import "./style.css"

const Tasks = (props) => (
    <ul className="container__tasks">
        {props.tasks.map(task => (
            <li 
            key={task.id}
            className={`tasks__item${task.done && props.hideDoneTasks ? " tasks__item--hidden" : ""}`}>
                <button className="container__tasks__done">{`${task.done ? "✔️" : ""}`}</button>
        <button className="container__tasks__remove">🗑️</button>
        {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;