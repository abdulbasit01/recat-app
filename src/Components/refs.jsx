import React, { Component } from 'react';
import DropDonw from "./multipleDropDown"
import "../bootstrap.css"
import "../App.css"
class RefsC extends Component {
    inputRef=React.createRef()
    componentDidMount() {
        this.inputRef.current.focus();
    }
  
    
    render() { 
        return ( 
            <React.Fragment>
                <form className="container-fluid App">
                    <div className="row">
                        <label htmlFor="userName" className="col-lg-1">name &nbsp;</label>
                        <input type="text" id="useraAme" ref={this.inputRef} className="form-control col-lg-4"/>
                    </div>
                    <div className="row">
                        <label htmlFor="userEmail" className="col-lg-1">Email &nbsp;</label>
                        <input type="text" id="userEmail" className="form-control col-lg-4"/>
                    </div>
                    <div className="row"> 
                        <label htmlFor="selectItem" className="col-lg-1">Select Course</label>
                        <br/>
                        <DropDonw id="selectItem" className="btn btn-success"/>
                    </div>
                    <div className="row customDiv"> 
                        <label htmlFor="selectItem" className="col-lg-1">number</label>
                        <br/>
                        <select className='col-lg-1 custom-select customOption'>
                            <option value="+92">+92</option>
                        </select>

                        <input type="number" id="userEmail" className="form-control col-lg-3 customNumber" />
                    </div>

                    <div className="row">
                        <button className='btn btn-success col-lg-1 '>submit</button>
                    </div>
                </form>
            </React.Fragment>
         );
    }
}
 
export default RefsC