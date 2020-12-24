import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { ButtonsBox, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }
    return (
        <ButtonsBox>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
         </Button>
        </ButtonsBox>
    )
};

export default Buttons;
