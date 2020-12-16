import React from "react";
import "./style.css";
import { TasksList } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksList>
        {tasks.map(task => (
            <li
                key={task.id}
                className={`tasks__item${task.done && hideDone ? " tasks__item--hidden" : ""}`}>
                <button
                    onClick={() => toggleTaskDone(task.id)}
                    className="container__tasks__done">{`${task.done ? "✔️" : ""}`}</button>
                <button onClick={() => removeTask(task.id)} className="container__tasks__remove">🗑️</button>
                {task.content}
            </li>
        ))}
    </TasksList>
);

export default Tasks;