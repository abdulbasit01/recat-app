import React, { Component } from 'react';
class EventBind extends Component {
    state = { 
        Message:"Hello"
     }
    clickHandeler(){
        this.setState({
            Message:"Yes I'm Changes"
        })
    }
    Mouse=()=>{
        this.setState({
            Message:"Hello-2"
        }) 
    }
    
    
    render() { 
        return ( 
            <div>
                <p>{this.state.Message}</p>
                <button onClick={()=>this.clickHandeler()} onKeyPress={this.Mouse}>Click</button>
            </div>
         );
    }
}
//This will give error but to solve this error we use arrow or syanc function
 //onClick={()=>{this.clickHandeler()}}
export default EventBind;