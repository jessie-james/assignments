import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";
import { AppProvider } from "./AppContext";
import "./moodtrackmain.css";
import App from "./App";

ReactDOM.render(
    <AppProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AppProvider>,
    document.getElementById("root")
);