import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    align-items: space-between;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #ccc;
    width: 100%;
    padding: 20px 20px 20px 5px;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        width: 100%;
    }
`;



export const FormButton = styled.button`
    background-color: teal;
    color: #fff;
    flex-basis: 30%;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }
    @media (max-width: 767px) {
        flex-basis: 100%;
        padding: 10px;
    }  
`;