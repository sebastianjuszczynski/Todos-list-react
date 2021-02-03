import styled from "styled-components";

export const ButtonsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;
    justify-content: end;
    margin-bottom: 10px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        justify-items: center;
 }

`;
export const Button = styled.button `
    background: transparent;
    color: teal;
    border: none;
    transition: color 0.3s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 0 0 10px 0;
        text-align: left;
 }

    &:hover {
        color: hsl(180, 100%, 30%);
    }
`
