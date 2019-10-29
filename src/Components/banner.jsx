import React, { Component } from 'react';
const style={
    backgroundColor:"#1212",
    textAlign:"justify",
    padding:"10px",
    height:"200px",
    overflow: "overlay",
    width:"49%",
    border:"1px #1215 groove",
    float:"right",
}
class bannerComp extends Component {
    state = { 
        isContext:"We are the team of very passionate and enthusiast persons. We provide you different in door and out door services like photgraphers ,videographer, interior designer ,graphics designer "
     }
    ;
    render() { 
        let context;
        context=<div>{this.state.isContext}</div>
        return ( <div style={style}>{context}</div> );
    }
}
 
export default bannerComp;