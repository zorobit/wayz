import React, { Component } from "react";
import Space from './Space/Space';
import './App.css';
import Home from './home/home';
import Particle from './Particles/Particles';
import Navigation from './Navigation/navigation';
import Logo from './logo/logo';
import Signin from './Signin/Signin';
import Register from './Register/Register';
 import Bars from './Bars/Bars';
import Join from './Join/Join';
import Calendare from "./calendar/calendar";
import Profil from './profile/profile';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

constructor(){
  super();
  this.state={
    input:'',
    route:'homep',
    isSignedIn:false,
    session:'a',
    user:{
     id:'',
     name:'',
     lastName:'',
     number:'',
     email:'',
     ville:'',
     sexe:'',
     joined:''
   }
    
  }
}

loadUser=(data)=>{
  this.setState({user:{
     id:data.id,
     name:data.name,
     lastName:data.lastname,
     number:data.number,
     email:data.email,
     ville:data.ville,
     sexe:data.sexe,
     joined:data.joined
  }})
}

onRouteChange=(route) =>{
 if(route==="signin" || route==="registrer"){
    this.setState({isSignedIn:false})
  } else {
    this.setState({isSignedIn:true})
  }
  this.setState({route:route})
}

onStateChange=(route,session) =>{
  if(route==="signin" || route==="registrer"){
    this.setState({isSignedIn:false})
  } else {
    this.setState({isSignedIn:true})
  }
  this.setState({session:session});
  this.setState({route:route})
}

  render(){
  return (
    <div>
   { this.state.route==='homep'  && ( this.state.session==='normal' || this.state.session==='admin' || this.state.session==='a' )
    ? 
    <div>
    <Space/>
    <Home onRouteChange={this.onRouteChange}/>
    </div>
    :
    <div>
    <Particle/>
     <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} session={this.state.session}/>
    <Logo/>
    { this.state.route==='signin' && ( this.state.session==='normal' || this.state.session==='admin' ||this.state.session==='a')
      ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} onSessionChange={this.onSessionChange} onStateChange={this.onStateChange}/>
      :(this.state.route==='registrer' 
         ?<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
         :(this.state.route==='profile' && ( this.state.session==='normal')
          ?<Profil user={this.state.user}/>
          :(this.state.route==='home'
          ?<Calendare />
         :<div></div>)))

    }


    </div>

   
  }
  {/*<LocationSearchModal/>*/}
   </div>
  
  );
}
}

export default App;