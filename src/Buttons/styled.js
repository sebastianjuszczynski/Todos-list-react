import styled from "styled-components";

export const ButtonsBox = styled.div`
    flex-basis: 70%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 767px) {
        flex-basis: 100%;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 10px;
 }

`;
export const Button = styled.button `
    background: transparent;
    color: teal;
    border: none;
    margin: 0 20px 0 0;
    transition: color 0.3s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 0 0 10px 0;
 }

    &:hover {
        color: hsl(180, 100%, 30%);
    }
`
