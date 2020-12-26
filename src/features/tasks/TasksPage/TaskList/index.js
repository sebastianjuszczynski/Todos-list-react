import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectTasksState, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import { List, Item, Button } from "./styled";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");
    
    const { hideDone } = useSelector(selectTasksState);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
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
                    <Link to={`/tasks/${id}`}>{content}</Link>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;