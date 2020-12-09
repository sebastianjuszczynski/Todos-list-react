import React from "react";
import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask }) => (
    <ul className="container__tasks">
        {tasks.map(task => (
            <li 
            key={task.id}
            className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}>
                <button className="container__tasks__done">{`${task.done ? "✔️" : ""}`}</button>
                <button onClick={() => removeTask(task.id)} className="container__tasks__remove">🗑️</button>
        {task.content}
            </li>
        ))}
    </ul>
);

export default Tasks;