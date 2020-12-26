import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: 0 auto;

    @media (max-width: 767px) {
        width: 100%;
    }
`;
export const ContainerHeader = styled.h1`
    align-self: flex-start;
    margin-bottom: 0;
    

    @media (max-width: 767px) {
        align-self: center;
    }
`;

export const ContainerH2 = styled.h2`
    background-color: #fff;
    width: 100%;
    box-shadow: 1px 1px 3px 1px #ccc;
    padding: 20px;
    margin-bottom: 1px;

    @media (max-width: 767px) {
        text-align: center;
    }
`;

