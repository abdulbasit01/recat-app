import React, { Component } from 'react';
import "../App.css"
function mapingList() {
    let navBar=["Home", "About Us", "Contact"];
    //imageUrl:'https://picsum.photos/200',
    let sideMenu=["My Rect Side"]

    return(
        <div className="customDiv">
            {
                navBar.map(navBar =><span key={navBar}><a href="index.html">{navBar}</a></span>)
                
            }
            {
                sideMenu.map(sideMenu =><div key={sideMenu}><a href="#">{sideMenu}</a></div>)
            }
            
        </div>
    )
}   
 
export default mapingList;