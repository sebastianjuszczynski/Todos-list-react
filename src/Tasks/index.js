import React from "react";
import { List, Item, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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
);

export default Tasks;