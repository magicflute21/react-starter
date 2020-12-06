import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/app";

// ReactDOM.render(<App />, document.getElementById("app"));


const ToDo = () => {
    return(
        <div>
            <h1>Helloo?</h1>
            <p>Are you there?</p>
        </div>

    );
};
//  put component into html page

ReactDOM.render(<ToDo />, document.getElementById('todo-wrapper'));