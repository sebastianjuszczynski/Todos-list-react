import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: white;
    padding: 10px 10px 3px 10px;
    &.${activeClassName} {
        font-weight: bold;
    }
    &:hover {
    transition: 0.5s;
    filter: brightness(0.8);
    border-bottom: 1px solid;
  }
`;
export const List = styled.ul`
  background-color: teal;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
  margin: 0px;
`;