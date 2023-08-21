import React from 'react';
import Alert from "./components/Alert/Alert";
import {AlertTypes} from "./components/Alert/IAlert";


function App() {
    return (
        <div className="App">
            <Alert title={"Henry"} message={"Accory"} type={AlertTypes.PENDING}></Alert>
        </div>
    );
}

export default App;
