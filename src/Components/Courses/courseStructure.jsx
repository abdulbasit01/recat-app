import React, { Component } from 'react';
import {Link } from "react-router-dom";
class SelectionOfCourse extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="selection">
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
            </div>
         );
    }
}
 
export default SelectionOfCourse;