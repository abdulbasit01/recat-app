import React, { Component } from 'react';
import ChildComp from "./ChildComponent.jsx";
class ParentComps extends Component {
    state = { 
        message:"users"
    }
    greeting(){
        alert(`hello ${this.state.message}`)

    }

    render() { 
        return ( 
            <ChildComp eventHandeler={()=>this.greeting()}/>
         );
    }
}
 
export default ParentComps;