import React , { Component } from "react";
import fire from "./fire";


class Login extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
        
    }
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=> {
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return(
            <div>
                 <h1>
                       Login to my website! If this is your first time here, sign up for free to get started!
                   </h1>
                <form>
                   <input
                   type="email"
                   id="email"
                   name="email"
                   placeHolder="enter email address"
                   onChange={this.handleChange}
                   value={this.state.email}
                   />
                   <input 
                   name="password"
                   type="password"
                   onChange={this.handleChange}
                   id="password"
                   placeHolder="enter password"
                   value={this.state.password}
                   />
                  
                   <button onClick={this.login}>Login</button>
                   <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        )
    }

}
export default Login;