import React from "react";
import { ButtonsBox, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <ButtonsBox>
            <Button onClick={toggleHideDone}>
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
            <Button
                onClick={setAllDone}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
         </Button>
        </ButtonsBox>
    )
};

export default Buttons;
