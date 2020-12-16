import React from "react";
import { ButtonsContainer, ContainerHeader, ContainerH2 } from "./styled"



const ButtonsSection = ({ title, body }) => (
    <ButtonsContainer>
        <ContainerHeader>
            <ContainerH2>{title}</ContainerH2>
            {body}
        </ContainerHeader>
    </ButtonsContainer>
);

export default ButtonsSection;