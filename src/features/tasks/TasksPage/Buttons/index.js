import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, fetchExampleTasks } from "../../tasksSlice";
import { ButtonsBox, Button } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    
    return (
        <ButtonsBox>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {tasks.length > 0 && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
         </Button>
                </>
            )}
        </ButtonsBox>
    )
};

export default Buttons;
