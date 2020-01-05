import React, { Component } from 'react'
import Lifecycleb from "./lifeCycleB.jsx" 

export class lifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Abdul Basit",
        }
        console.log("LifeCycleA From Constructor");
    }
    static getDerivedStateFromProps(state,props){
        console.log("LifeCycleA From Static Function")
        return null 
    }
    componentDidMount(){
        console.log("LifeCycleA From Mountinng Component")
    }
    render() {
        {console.log("LifeCycleA from Render")}
        return (
            <div>
                <Lifecycleb/>
                hello world
            </div>
        )
    }
}

export default lifeCycleA
