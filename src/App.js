import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Navigation from "./Navigation";
import { toAuthor, toTask, toTasks } from "./routes";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toTask()}>
          <TaskPage />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <Author />
        </Route>
        <Route path="/">
          <Redirect to={toTasks()} />
        </Route>
      </Switch>

    </HashRouter>
  )
};

export default App;