import React from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "../tasksSlice";
import { List, Item, Button } from "./styled";

const TaskList = ({ removeTask, toggleTaskDone }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔️" : ""}
                    </Button>
                    <Button onClick={() => removeTask(task.id)} red>🗑️</Button>
                    {task.content}
                </Item>
            ))}
        </List>
    )
};

export default TaskList;