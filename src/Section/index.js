import React from "react";
import "./style.css";

const Section = ({ title, subtitle, body }) => (
    <section className="container">
        <h1 className="container__header">{title}</h1>
        <h2 className="container__h2">{subtitle}</h2>
        {body}
    </section>
);

export default Section;