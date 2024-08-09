import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(Render)
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");

//JSX - HTML like or XML like syntax but it's not HTML
//JSX => Babel transpiles it to React.createElement => React Element(Object) => HTMLElement (Render)
const jsxHeading = <h1 id="heading1">Namaste React using jsx1</h1>; //React Element
const jsxHeadingMultiline = (
  /*To use multiple siblings we need to wrap them into a single parent tag, 
  so for that div, empty angular brackets or React.Fragment can be used.
  Div adds as an extra element to DOM, to avoid that empty brackets or React,Fragment is better choice*/
  // <div id="elementContainer">
  // <>
  <React.Fragment>
    <h2 id="heading2">Namaste React using jsx2</h2>
    <h3 id="heading3">Namaste React using jsx3</h3>
  </React.Fragment>
  // </>
  // </div>
); //React Element

// console.log({ heading });
// console.log({ jsxHeading });

const root = ReactDOM.createRoot(document.getElementById("root"));

//Functional Component as normal functions

// const HeadingComponent = function () {
//   return <h1>Namaste Functional Component</h1>;
// };
//  function HeadingComponent () {
//   return <h1>Namaste Functional Component</h1>;
// };

const HeadingComponent = () => <h1>Namaste Functional Component</h1>; //React Component
//Component Composition - Use of one component into another is Component Composition. Eg - <HeadingComponent />
// inside HeadingComponentMultiline
//We can write JS expressions inside JSX using curly brackets
//We can use Elements inside components just like JS expressions, becos end of the day it's a variable created using const
const HeadingComponentMultiline = () => (
  <div id="container">
    <HeadingComponent></HeadingComponent>
    <HeadingComponent />
    {HeadingComponent()}
    <p>{20 + 30}</p>
    <p>{jsxHeading}</p>
    <h2>Namaste Functional Component2</h2>
    <h3>Namaste Functional Component3</h3>
  </div>
); //React Component

// root.render(jsxHeading); //This is how the React Elements get render
root.render([jsxHeading, jsxHeadingMultiline]); //This is how the React Elements get render
root.render(<HeadingComponentMultiline></HeadingComponentMultiline>); //This is how the React Components get render #1 Way
root.render(<HeadingComponentMultiline />); //This is how the React Components get render //It's same as above #2 Way
root.render(HeadingComponentMultiline()); //This is how the React Components get render //It's same as above #3 Way
