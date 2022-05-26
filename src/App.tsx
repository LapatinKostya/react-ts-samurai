import React from 'react';
import './App.css';
import {NewComponent} from "./NewComponent";

function App() {
    return (
        <div className="App">
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>React</li>
            </ul>
            <NewComponent/>
        </div>
    );
}

export default App;
