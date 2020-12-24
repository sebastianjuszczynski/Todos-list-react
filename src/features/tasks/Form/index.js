import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { FormContainer, FormInput, FormButton } from "./styled";
import { addTask } from "../tasksSlice";


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputElement = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

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