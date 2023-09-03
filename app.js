import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// React.createEleemnt => object => HTMLElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Namastey React!");
console.log(heading);

// JSX :- is not HTML-in-JS but HTML/XML like syntax
// JSX cannot be understand by browsers
// JSX is transpilled before it reaches to JS Engine => Parcel => Babel

// JSX => Babel transpiles in to React.createEleemnt => object => HTMLElement(render)
const jsxHeading = (
  <h1 id="heading" className="head">
    Namastey React using JSX
  </h1>
);
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
