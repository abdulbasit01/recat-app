import React, { Component } from 'react';
import Message from "./Components/Comp1.jsx"
import Ebind from "./Components/eventBinding.jsx";
import ParentComp from "./Components/ParentsComponent.jsx";
import UserLogin from './Components/checkLogin.jsx';
import Mapping from "./Components/MapsIndexing.jsx";
import Banner from "./Components/banner"
import LifeCycle from "./Components/lifeCycleA.jsx";
import FragmentP from "./Components/Fragments.jsx"
import Table from "./Components/Table.jsx"
import Refs from "./Components/refs"
import Error from "./Components/errorHandling"
import './App.css';
import ErrorM from "./Components/makingErrorBoundary"
import CheckInput from "./Components/inputForm"
import Select from "./Components/SelectCourse"
import Course from "./Components/Courses/course"
class App extends Component {
  state={
    inputForm:[],
    text:false,
  }
  addInformation = addInformation =>{
    const info =this.state.inputForm
    info.push(addInformation)
    localStorage.setItem("infoList",JSON.stringify(info))
    console.log(info)
    this.setState(()=>{inputForm:info})
  }
  getText=(e)=>{
    this.setState({
      text:!this.state.text,
    })
  }
  render() {
      
    return (
      <div className="App">
        <Course/>
        {/* <ErrorM>
          <Error props="joker"/>
        </ErrorM> */}
        {/* <Select/>
        <CheckInput addInformation={this.addInformation}/>
        <button onClick={this.getText}>Click To Get Text</button>
        {this.state.text && <p>hello</p>} */}
        {/* <Refs/> */}
        {/* <Table/> */}
        {/* <FragmentP/> */}
        {/* <LifeCycle/> */}
        {/* <Mapping/>
        <Banner/> */}
        {/* <UserLogin/> */}
        {/* <Message/> */}
        {/* <ParentComp/> */}
        {/* <Ebind/> */}
      </div>
    );
  }
}

export default App;
