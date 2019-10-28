import React, { Component } from 'react';
const style={
    backgroundColor:"#1212",
    textAlign:"justify",
    padding:"10px",
    height:"100px",
    overflow: "overlay",
    border:"1px #1215 groove"
}
class bannerComp extends Component {
    state = { 
        isContext:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
     }
    ;
    render() { 
        let context;
        context=<div>{this.state.isContext}</div>
        return ( <div style={style}>{context}</div> );
    }
}
 
export default bannerComp;