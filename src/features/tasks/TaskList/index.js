import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Button } from "./styled";

const TaskList = () => {
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
                    <Button onClick={() => dispatch(removeTask(task.id))} red>🗑️</Button>
                    {task.content}
                </Item>
            ))}
        </List>
    )
};

export default TaskList;