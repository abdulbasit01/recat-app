import React, { Component ,useState} from 'react';
import {withRouter , NavLink} from "react-router-dom"
function Selection (props){
    console.log(props)
    const courseName = props.match.params.coursename;
    const typeOfCourse={
        maths:[
            {title:"lec 1 ", vid:"776gQTni59o"},
            {title:"lec 2 ", vid:"o8jEBYOu9dA"},
            {title:"lec 3 ", vid:"egySCOVAgTA"}
        
            
        ],

        chemistry:[
            {title:"lec 1 ", vid:"3pHsand5htI"},
            {title:"lec 2 ", vid:"3pHsand5htI"},
            {title:"lec 3 ", vid:"3pHsand5htI"}
        ],

        physics:[
            {title:"lec 1 ", vid:"e-gptWgP1S0"},
            {title:"lec 2 ", vid:"3pHsand5htI"},
            {title:"lec 3 ", vid:"3pHsand5htI"}
        ],
        
        cs:[
            {title:"lec 1 ", vid:"87yp0dg4kUM"},
            {title:"lec 2 ", vid:"3pHsand5htI"},
            {title:"lec 3 ", vid:"3pHsand5htI"}
        ],
        
    };
    const [vid, uid]= useState(typeOfCourse[courseName][0].vid);
    const [vtit, utit]= useState(typeOfCourse[courseName][0].title)
    console.log(vid )
    const renderVideo=()=>{
        return(
            <React.Fragment>
                <h1>{typeOfCourse[courseName][0].title} of {courseName}  </h1>
                <div className="video-container">
                    <iframe width="853" height="480" src={"//www.youtube.com/embed/"+ vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
                </div>
            </React.Fragment>
        )
    }
    return(
        <div>
            Welcome To The Course {courseName}
            {renderVideo()}
            <ul className='collapsible popout' >
                {typeOfCourse[courseName].map(item => {
                    return (<li key={item.title} ><NavLink to="#" onClick={()=>{
                        uid(item.vid)
                        utit(item.title)
                    }}
                    >{item.title}</NavLink></li>)
                })}   
            </ul>
        </div>
    )
}
export default withRouter(Selection);