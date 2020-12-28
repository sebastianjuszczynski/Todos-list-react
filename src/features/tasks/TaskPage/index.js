import React from 'react';
import { useParams } from "react-router-dom";
import Section from "../../../common/Section";
import Container from "../../../common/Container";
import { useSelector } from 'react-redux';
import { getTaskById } from '../tasksSlice';

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));
    return (
        <Container>
            <Section title="Szczegóły zadania" subtitle={task ? task.content : "Oops... Task not found! :("} body={!!task && (
                <>
                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
                </>
            )} />
        </Container>
    );
}

export default TaskPage;