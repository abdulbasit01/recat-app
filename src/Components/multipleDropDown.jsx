import React, { Component } from 'react';
import "../bootstrap.css"
import "../App.css"
class multipleDropdown extends Component {
    classes="checkBoxes ";
    multipleSelect=()=>{
        let a =document.getElementsByClassName("checkBoxes")[0];
        a.style.display="Block";
    }   
    render() { 
        return ( 
            <React.Fragment>
                <div className="customDiv2">
                    <div onClick={this.multipleSelect}>
                        <select className="selectBox custom-select">
                            <option value="">Select Subjects</option>
                        </select>
                    </div>
                    <div className="col-lg-3 customDiv">
                        <div id="checkboxes" className={this.classes} >
                            <label htmlFor="one"><input type="checkbox" id="one" value="Physics"/>Physics</label>
                            <label htmlFor="two"><input type="checkbox" id="two" value="Chemistry"/>Chemistry</label>
                            <label htmlFor="three"><input type="checkbox" id="three" value="Maths"/>Maths</label>
                            <label htmlFor="four"><input type="checkbox" id="four" value="Computer"/>Computer</label>
                        </div>
                    </div>
                </div>
            
            </React.Fragment>
         );
    }
}
 
export default multipleDropdown;