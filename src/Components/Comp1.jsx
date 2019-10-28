import React, { Component } from 'react';
class message extends Component {
    state = { 
        message:"Hello Users ",
        count:0,
     }
    changeState=()=>{
        this.setState({message:"Mouse Pressed "})
    }
    changeNumber(){
        this.setState({
            count:this.state.count+1
        })
    }
    statRetain(){
        this.setState({message:"Hello Users "})
        this.setState({count:0})
    }
    render() { 
        return (
            <div>
                <p>{this.state.message}{this.state.count}</p>
                <button onMouseEnter={this.changeState} onMouseLeave={()=>{this.statRetain()}} onClick={()=>{this.changeNumber()}}>Subscribe </button>
            </div>
          );
    }
}
 
export default message;