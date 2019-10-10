import React from "react";
import "./App.css";
import Home from "./containers/home";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Home />
            </div>
        );
    }
}
