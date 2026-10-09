import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1> Custom appfas</h1>
    </div>
  );
}

const RreactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const anotheruser = " bane"

const ReactElement = React.createElement(
  'a',
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotheruser
);

createRoot(document.getElementById("root")).render(
//   <MyApp />
//   MyApp()
//   RreactElement
//   anotheruser
  ReactElement
);
