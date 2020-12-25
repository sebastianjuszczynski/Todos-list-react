import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Button } from "./styled";

const TaskList = () => {
    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(({ id, done, content }) => (
                <Item
                    key={id}
                    hidden={done && hideDone}
                >
                    <Button
                        onClick={() => dispatch(toggleTaskDone(id))}
                    >
                        {done ? "✔️" : ""}
                    </Button>
                    <Button onClick={() => dispatch(removeTask(id))} red>🗑️</Button>
                    {content}
                </Item>
            ))}
        </List>
    )
};

export default TaskList;