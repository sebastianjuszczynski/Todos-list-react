import React from "react";
import "./style.css";


const ButtonsSection = ({ title, body }) => (
    <section className="buttons__container">
        <article className="buttons__container__header">
            <h2 className="buttons__container__h2">{title}</h2>
            {body}
        </article>
    </section>
);

export default ButtonsSection;