import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./Nav.js";
import Container from "./Container";

const App = () => (
    <Router>
        <div>
            <Nav />
            <Container />
        </div>
    </Router>
);

render(<App />, document.getElementById("root"));