import React from 'react';
import {
    Link
  } from "react-router-dom";
// about me, projects, contact

const Navigation = () => {
    return (
       
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
    
            <hr />
    
            {/*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */}

          </div>
       
      );
}

export default Navigation;