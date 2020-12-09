import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }
    return (
        <div className="buttons">
            <button onClick={toggleHideDone} className="hideButton">
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
            <button
                onClick={setAllDone}
                className="allDone"
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
         </button>
        </div>
    )
};

export default Buttons;
