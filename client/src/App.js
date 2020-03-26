

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
// import NavBarStart from "./components/NavBar-Start/index"
// import Home from "./pages/Home
import NavBarStart from "./components/NavBar-Start"
// Check for token to keep user logged in
import Recipes from "./pages/Recipes";

import VideoPlayer from "./pages/VideoPlayer";
import ChatRoom from "./components/Chat/Chat/chatroom.js";
import Settings from "./pages/settings.js";
// import LiveStream from "./pages/LiveStream"
import VideoSettings from "./pages/VideoSettings";



const App = (props) => {


console.log(props)

return (

<React.Fragment>
  <NavBarStart/>
   <Router>
      {/* <Route exact path = "/" component = {LiveStream} /> */}
      <Route exact path = "/SignUp" component = {SignUp} />
      <Route exact path ='/'  component={Login} /> 
      <Route  exact path="/recipes" component={Recipes} />
      <Route path = "/chat" component = {ChatRoom} />
       <Route exact path = "/settings" component = {Settings} />
       <Route exact path = "/about" component = {About}/>
      <Route path = "/streams/:username" component = {VideoPlayer} />
      <Route exact path = "/VideoSettings" component = {VideoSettings} />
      <Switch>
        
      </Switch>
   </Router>


    
  </React.Fragment>
  
)}
;

export default App;

