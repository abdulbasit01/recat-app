import React, { Component } from 'react';
import {Link } from "react-router-dom";
class SelectionOfCourse extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Link to='/maths'>
                    Maths
                </Link>
                <Link to='/physics'>
                    physics
                </Link>
                <Link to='/chemistry'>
                    chemistry
                </Link>
                <Link to='/cs'>
                    Computer Science
                </Link>
            </React.Fragment>
         );
    }
}
 
export default SelectionOfCourse;