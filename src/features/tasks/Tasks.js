import React from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import ButtonsSection from "../../common/ButtonsSection";
import TasksSection from "../../common/TasksSection";
import Container from "../../common/Container";




function Tasks() {

  return (
    <Container>
      <Section title="Lista zadań" subtitle="Dodaj nowe zadanie" body={<Form />} />
      <ButtonsSection title="Lista zadań" body={<Buttons />} />
      <TasksSection body={<TaskList />} />
    </Container>
  );
}

export default Tasks;
