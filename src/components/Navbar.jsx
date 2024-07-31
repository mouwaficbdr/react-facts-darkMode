/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import reactlogo from "../assets/react-logo.png"

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <img className="nav--logo_icon" src={reactlogo} />
      <h3 className="nav--logo_text">ReactFacts</h3>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={() =>props.toggleDarkMode(!props.darkMode)}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
