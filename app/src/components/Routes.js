import React from 'react';
import { Switch, Route, } from "react-router-dom";

const Routes = () => {
return (

    
        <Switch>
            <Route exact path="/">
                <p>
                    home
                </p>
                {/* <Home /> */}
            </Route>
            <Route path="/about">
                <p>
                    about
                </p>
                {/* <About /> */}
            </Route>
            <Route path="/dashboard">
                <p>
                   dashboard
                </p>
                {/* <Dashboard /> */}
            </Route>
        </Switch>
  
    );
};

export default Routes;



