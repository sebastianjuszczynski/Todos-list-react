import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import ButtonsSection from "./ButtonsSection";
import TasksSection from "./TasksSection";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Nauczyć się Reacta", done: false },
  { id: 2, content: "Zrobić obiady do pracy", done: true },
];

const hideDoneTasks = false;


function App() {
  return (
    <Container>
      <Section title="Lista zadań" subtitle="Dodaj nowe zadanie" body={<Form />} />
      <ButtonsSection title="Lista zadań" body={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
      <TasksSection body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Container>
  );
}

export default App;
