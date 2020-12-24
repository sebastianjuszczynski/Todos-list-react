import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Button } from "./styled";

const TaskList = ({ removeTask }) => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();
    
    return (
        <List>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(task.id))}
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