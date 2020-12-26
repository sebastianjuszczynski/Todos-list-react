import React from 'react';
import Container from "../../common/Container";
import Section from "../../common/Section";



function Author() {
    return (
        <Container>
            <Section title="O autorze" subtitle="Sebastian Juszczyński" body={<>
                <p>Nazywam się Sebastian Juszczyński i pochodzę z małej miejscowości położonej w województwie
                kujawsko -
                pomorskim,
                w pobliżu Torunia - Ostrowite.😁💪</p>
            <p>W wieku 19 lat przeprowadziłem się do Olsztyna🚉, żeby studiować Ochronę Środowiska.📚</p>
            </>
            } />
        </Container>
    )
};
export default Author;