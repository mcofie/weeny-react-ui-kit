import React from "react";
import Button from "./components/Button/Button";
import {ThemeProvider} from "styled-components";


function App() {
    return (
        <div className="App">
            <ThemeProvider theme={{mode: 'light'}}>
                <Button></Button>
            </ThemeProvider>
        </div>
    );
}

export default App;
