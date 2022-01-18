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

  <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#project">Nicholas L Smith</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link px-4" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-4" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-4" to="/skills">Skills</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-4" to="/services">Services</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link px-4" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  );
}

export default Navigation;