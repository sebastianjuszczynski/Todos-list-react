import React from "react";
import { Container, ContainerHeader, ContainerH2 } from "./styled";

const Section = ({ title, subtitle, body }) => (
    <Container>
        <ContainerHeader>{title}</ContainerHeader>
        <ContainerH2>{subtitle}</ContainerH2>
        {body}
    </Container>
);

export default Section;