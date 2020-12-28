import React from "react";
import { toAuthor, toTasks } from "../routes";
import {List, StyledNavLink} from "./styled";

function Navigation() {
    return (
        <nav>
        <List>
          <li>
            <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
          </li>
        </List>
      </nav>
    );
};

export default Navigation;