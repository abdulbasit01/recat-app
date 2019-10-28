import React, { Component } from 'react';
// import Message from "./Components/Comp1.jsx"
// import Ebind from "./Components/eventBinding.jsx";
// import ParentComp from "./Components/ParentsComponent.jsx";
// import UserLogin from './Components/checkLogin.jsx';
import Mapping from "./Components/MapsIndexing.jsx";
import Banner from "./Components/banner"
import './App.css';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <Mapping/>
        {<Banner/>}
        {/* <UserLogin/> */}
        {/* <Message/> */}
        {/* <ParentComp/> */}
        {/* <Ebind/> */}
      </div>
    );
  }
}

export default App;
