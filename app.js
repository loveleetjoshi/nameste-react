import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createEleemnt => object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namastey React!");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
