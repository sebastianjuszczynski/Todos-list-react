import React, { useState, useRef } from "react";
import { FormContainer, FormInput, FormButton } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputElement = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputElement.current.focus();
    };

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <FormInput
                ref={inputElement}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>Dodaj zadanie!</FormButton>
        </FormContainer>
    );
};

export default Form;