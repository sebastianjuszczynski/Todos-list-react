import styled, { css } from "styled-components";

export const List = styled.ul`
    align-self: flex-start;
    list-style: none;
    padding: 0;
    background-color: #fff;
    width: 100%;
    box-shadow: 1px 1px 3px 1px #ccc;
    margin: 0;
`;

export const Item = styled.li`
    background-color: #fff;
    padding: 10px 10px 0 10px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #eee;
    margin-bottom: 5px;

    ${({ hidden }) => hidden && css`
        display: none;
`}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    background-color: hsl(120, 100%, 25%);
    font-weight: bold;
    margin-right: 5px;
    padding: 5px;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(120, 100%, 30%);
    }

    ${({ red }) => red && css`
        background-color: hsl(0, 100%, 40%);
    
    &:hover {
        background-color: hsl(0, 100%, 50%);
    }
    `}
`;

