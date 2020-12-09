import React, { useState } from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import ButtonsSection from "./ButtonsSection";
import TasksSection from "./TasksSection";
import Container from "./Container";


function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Nauczyć się Reacta", done: false },
    { id: 2, content: "Zrobić obiady do pracy", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }

      return task;
    }));
  };

  return (
    <Container>
      <Section title="Lista zadań" subtitle="Dodaj nowe zadanie" body={<Form />} />
      <ButtonsSection title="Lista zadań" body={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} />} />
      <TasksSection body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />} />
    </Container>
  );
}

export default App;
