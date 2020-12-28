import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink, List } from "./styled";
import {toAuthor, toTask, toTasks} from "./routes";


function App() {
  return (
    <HashRouter>
        <nav>
            <List>
                <li>
                  <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </List>
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
        </nav>
    </HashRouter>
)};

export default App;