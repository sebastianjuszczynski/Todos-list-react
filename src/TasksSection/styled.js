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