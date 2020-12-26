import styled from "styled-components";

export default styled.input`
    flex-basis: 70%;
    border: 2px solid #eee;
    padding: 10px;
    
    @media (max-width: 767px) {
        flex-basis: 100%;
        margin-right: 0;
        margin-bottom: 5px;
    }    
`;