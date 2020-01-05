import React, { Component } from 'react';
import Course from "./courseStructure"
import Selection from "./Selection"
import {BrowserRouter,Route,Switch,Router} from "react-router-dom";
function Home(props){
    
        return ( 
        <React.Fragment>
           <BrowserRouter>
        <div className="App">
        <Switch>
            <Route exact path="/">
                <Course/>
            </Route>    
            <Route path="/:coursename">
                <Selection />
            </Route>
        </Switch>
        </div>
      </BrowserRouter>    
        </React.Fragment> );
    
}
 
export default Home;