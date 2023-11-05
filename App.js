import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!");
console.log(heading); //object

const element = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" },
    [
        React.createElement("h1", {}, "This is Namaste React"),
        React.createElement("h2", {}, "sdhgfjgdsjfgk"),
    ]),
    React.createElement("div", { id: "child2" },
    [
        React.createElement("h1", {}, "I am a h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag"),
    ])
]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(element);