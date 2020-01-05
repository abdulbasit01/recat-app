import React, { Component } from 'react';
class Selection extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div>
                    Select Courses
                </div>
                <form>
                <div className="col-lg-5 customDiv">
                    <div id="checkboxes" className={this.classes} >
                        <label htmlFor="four"><input type="checkbox" id="four" value="Maths"/>Maths</label>
                        <label htmlFor="four"><input type="checkbox" id="four" value="Physics"/>Physics</label>
                        <label htmlFor="four"><input type="checkbox" id="four" value="Chemistry"/>Chemistry</label>
                        <label htmlFor="four"><input type="checkbox" id="four" value="Computer Science"/>Computer Science</label>
                    </div>
                </div>

                </form>
            </React.Fragment>
         );
    }
}
 
export default Selection;