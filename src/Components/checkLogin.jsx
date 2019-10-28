import React, { Component } from 'react';
class guestLogin extends Component {
    state = {  
        isLogin:false,
        user:["Abdul basit","Guest"]
    }
    render() { 
        // return ( 
        //     this.state.isLogin===true? <div>Welcome {this.state.user[0]}</div>: <div>Welcome {this.state.user[1]}</div>
        //  );
        //We can do it in another way
        let message;
        if (this.state.isLogin!==true){
            message=<div>Welcome {this.state.user[0]}</div>
        }else{
            message=<div>Welcome {this.state.user[1]}</div>
        }
        return(<div>{message}</div>)

    }
}
 
export default guestLogin
