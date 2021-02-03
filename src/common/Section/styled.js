import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;
    box-shadow: 1px 1px 3px 1px #ccc;
    background-color: #fff;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const ContainerHeader = styled.h1`
    align-self: flex-start;
    margin-bottom: 0;
    padding-left: 5px;   

`;

export const ContainerH2 = styled.h2`
    background-color: #fff;
    width: 100%;
    font-weight: normal;
    padding-left: 5px;
    margin-bottom: 1px;

`;
export const Paragraph = styled.p`
    background-color: #fff;
    width: 100%;
    padding-left: 5px;
`;

