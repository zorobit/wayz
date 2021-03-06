import React from 'react';
import './Signin.css';

class Singnin extends React.Component{

 //server 
 constructor(props){
    super(props);
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }

  onEmailChange=(event)=>{
    this.setState({signInEmail:event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({signInPassword:event.target.value})
  }

  onSubmitSignIn=()=>{
    fetch('http://localhost:3001/signin',{
       method:'post',
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify({
         email:this.state.signInEmail,
         password:this.state.signInPassword
       })
    })
    .then(response=>response.json())
    .then(user=>{
       if(user.id){
  this.props.loadUser(user);
  this.props.onStateChange('home','normal');

      }
    })
    
  }
  

render(){

const {onRouteChange ,onStateChange}=this.props;

return(
  <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
  <div className="pa4 black-80">
     
    <fieldset  id="sign_up" className="ba b--transparent ph0 mh0">
      <legend  className=" tc f1 fw6 ph0 mh0 white" >Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 white" htmlFor="email-address">Email</label>
        <input 
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" 
            type="email" 
            name="email-address"  
            id="email-address"
             onChange={this.onEmailChange}
            />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 white" htmlFor="password">Password</label>
        <input 
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white" 
            type="password" 
            name="password"  
            id="password"
             onChange={this.onPasswordChange}
            />
      </div>
      
    </fieldset>
    <div className="">
      <input 
             onClick={()=>this.onSubmitSignIn()}

            className="white sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Sign in"
             />
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onRouteChange('registrer')} 
      className="tc f6 link dim white db pointer">Register</p>
    
    </div>
    <div className="lh-copy mt3">
      <p onClick={()=>onStateChange('home','admin')}
      className="tc f6 link dim white db pointer">Sign in as Admin</p>
    
    </div>

  </div>
  </article>

	)

}}

export default Singnin;