import React, { Component } from 'react';
class CheckInput extends Component {
    nameRef=React.createRef()
    emailRef=React.createRef()
    numberRef=React.createRef()
    CNICRef=React.createRef()
    optionRef=React.createRef()
    imageRef=React.createRef()
    clickHandeller=(e)=>{
        e.preventDefault()
        //alert(this.numberRef.current.value)
        const information= {
            nameRef:this.nameRef.current.value,
            emailRef:this.emailRef.current.value,
            numberRef:this.numberRef.current.value,
            CNICRef:this.CNICRef.current.value,
            optionRef:this.optionRef.current.value,
            imageRef:this.imageRef.current.value
            
        }
        // console.log(information)
        this.props.addInformation(information)
    }
    render() { 
        return ( 
            <React.Fragment>
                <form onSubmit={this.clickHandeller}>
                    <input type="text" name="name" placeholder="name" ref={this.nameRef} /><br/>
                    <input type="email" name="email" placeholder="email" ref={this.emailRef}/><br/>
                    <input type="number" name="number" placeholder="number" ref={this.numberRef}/><br/>
                    <input type="number" name="CNIC" placeholder="CNIC" ref={this.CNICRef}/><br/>
                    <select name="select" ref={this.optionRef}> 
                        <option value="O-Level & A-Level">
                                O-Level & A-Level
                        </option>
                        <option value="Federal Board">
                                Federal Board
                        </option>
                        <option value="Sindh Board">
                                Sindh Board
                        </option>
                        
                        
                    </select><br/>
                    <input type="file" name ="image" placeholder="image" ref={this.imageRef}/><br/>
                    <button >Submit</button>
                </form>
            </React.Fragment>
         );
    }
}
 
export default CheckInput;