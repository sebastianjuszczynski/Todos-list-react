import styled from "styled-components";

export const ButtonsContainer = styled.section`
    display: flex;
    width: 50%;
    margin: 20px auto 0 auto;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #ccc;

    @media (max-width: 767px) {
        width: 100%; 
    }
`;
export const ContainerHeader = styled.article`
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
`;
export const ContainerH2 = styled.h2`
    background-color: #fff;
    padding: 20px 0 20px 5px;
    margin-bottom: 1px;
    margin-top: 0;
    text-align: left; 
    
    @media (max-width: 767px) {
        flex-basis: 100%;
    }
`;