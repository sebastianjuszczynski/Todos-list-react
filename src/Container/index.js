import React from "react";
import "./style.css"

const Container = (props) => (
    <main className="main__container">
        {props.children}
    </main>
);

export default Container;