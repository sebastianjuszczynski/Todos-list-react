import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Author from "./features/author/Author";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { StyledNavLink } from "./styled";


function App() {
  return (
    <HashRouter>
        <nav>
            <ul>
                <li>
                  <StyledNavLink to="/tasks">Zadania</StyledNavLink>
                </li>
                <li>
                  <StyledNavLink to="/author">O autorze</StyledNavLink>
                </li>
            </ul>
            <Switch>
            <Route path="/tasks/:id">
                <TaskPage />
              </Route>
              <Route path="/tasks">
                <TasksPage />
              </Route>
              <Route path="/author">
                <Author />
              </Route>
              <Route path="/">
                <Redirect to="/tasks" />
              </Route>
            </Switch>
        </nav>
    </HashRouter>
)};

export default App;