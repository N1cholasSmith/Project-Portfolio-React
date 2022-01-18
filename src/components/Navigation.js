import React from 'react';
import { Link } from "react-router-dom";
import '../styles/styles.css';

import "../App.css"

const Navigation = () => {
  return (
       
  <div>
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}

  <nav className="navbar navbar-expand-lg navbar-light" id="navbar">
    <div className="container-fluid">
      <a className="navbar-brand fw-bold" href="#project">Nicholas L Smith</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link px-4" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link px-4" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  );
}

export default Navigation;