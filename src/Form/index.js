import React, { useState } from "react";
import { FormContainer, FormInput, FormButton } from "./styled";


const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };


    return (
        <FormContainer onSubmit={onFormSubmit}>
            <FormInput
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton>Dodaj zadanie!</FormButton>
        </FormContainer>
    );
};

export default Form;