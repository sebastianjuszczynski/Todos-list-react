import React, { useState } from 'react';
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import ButtonsSection from "../../common/ButtonsSection";
import TasksSection from "../../common/TasksSection";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";


function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
 return (
    <Container>
      <Section title="Lista zadań" subtitle="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <ButtonsSection title="Lista zadań" body={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />} />
      <TasksSection body={<TaskList tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />} />
    </Container>
  );
}

export default Tasks;
