import React from "react";
import "./Jumbotron.css"


const Jumbotron = ({ children }) => (
  <div
    style={{ height: 600, clear: "both", paddingTop: 120 }}
    className="jumbotron-fluid"
  >
    {children}
  </div>
);

export default Jumbotron;
