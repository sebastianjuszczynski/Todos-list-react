import React from 'react';
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import ButtonsSection from "../../common/ButtonsSection";
import TasksSection from "../../common/TasksSection";
import Container from "../../common/Container";
import { useTasks } from "../../useTasks";
import { selectTasks, toggleHideDone } from "./tasksSlice";


function Tasks() {
  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <Section title="Lista zadań" subtitle="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
      <ButtonsSection title="Lista zadań" body={<Buttons setAllDone={setAllDone} />} />
      <TasksSection body={<TaskList tasks={tasks} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />} />
    </Container>
  );
}

export default Tasks;
