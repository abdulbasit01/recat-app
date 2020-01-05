import React, { Component } from 'react'

export class lifeCycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Abdul Basit",
        }
        console.log("LifeCycleB From Constructor");
    }
    static getDerivedStateFromProps(state,props){
        console.log("LifeCycleB From Static Function")
        return null
    }
    componentDidMount(){
        console.log("LifeCycleB From Mountinng Component")
    }
    render() {
        {console.log("LifeCycleB from Render")}
        return (
            <div>
                hello world
            </div>
        )
    }
}

export default lifeCycleB
