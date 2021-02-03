import React from 'react';
import Container from "../../common/Container";
import Section from "../../common/Section";
import { Paragraph } from '../../common/Section/styled';



function Author() {
    return (
        <Container>
            <Section title="O autorze" subtitle="Sebastian Juszczyński" body={<>
                <Paragraph>Nazywam się Sebastian Juszczyński i pochodzę z małej miejscowości położonej w województwie
                kujawsko -
                pomorskim,
                w pobliżu Torunia - Ostrowite.😁💪</Paragraph>
                <Paragraph>W wieku 19 lat przeprowadziłem się do Olsztyna🚉, żeby studiować Ochronę Środowiska.📚</Paragraph>
            </>
            } />
        </Container>
    )
};
export default Author;