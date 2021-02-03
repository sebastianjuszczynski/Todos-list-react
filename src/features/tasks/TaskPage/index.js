import React from 'react';
import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';
import { Paragraph } from '../../../common/Section/styled';

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Section title="Szczegóły zadania" subtitle={task ? task.content : "Oops... Task not found! :("} body={!!task && (
                <>
                    <Paragraph>Ukończono: <strong>{task.done ? "Tak" : "Nie"}</strong></Paragraph>
                </>
            )} />
        </Container>
    );
}

export default TaskPage;