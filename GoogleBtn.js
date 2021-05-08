import React, { Component } from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import SnakeGame from './SnakeGame';
import SpotifyApi from './SpotifyApi';
import Banner from './Banner';
import Joke from './joke';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";



const CLIENT_ID = '131613456334-vcfigtvbbvo754ka20vop4ebehbcm375.apps.googleusercontent.com';

class GoogleBtn extends Component {

   constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: ''
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login (response) {
    if(response.accessToken){
      this.setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      }));
    }
  }

  logout (response) {
    this.setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
  }

  handleLoginFailure (response) {
    alert('Failed to log in')
  }

  handleLogoutFailure (response) {
    alert('Failed to log out')
  }
  

  render() {
    return (
    <div>
        { this.state.isLogined ?
            <GoogleLogout
            clientId={ CLIENT_ID }
            buttonText='Logout'
            onLogoutSuccess={ this.logout }
            onFailure={ this.handleLogoutFailure }
            >
            </GoogleLogout>: <GoogleLogin
            clientId={ CLIENT_ID }
            buttonText='Login'
            onSuccess={ this.login }
            onFailure={ this.handleLoginFailure }
            cookiePolicy={ 'single_host_origin' }
            responseType='code,token'
            />
        }
    <div className="BannerContainer">
                      <Banner />
                      <br>
                      </br>
                      <br>
                      </br>
                      <br>
                      </br>
                      <br>
                      </br>
                    <div>
                        <button onClick={this.logout}>Logout</button>
                    </div>
                </div>
                <div class="float-container">
                    <div id="child3" class="float-child"> 
                        <div className="hello">
                            <p>Hello user, you are now logged in! <br>
                            </br>Use the arrow keys to play my snake game and find Spotify music of your choice to listen to!</p>
                        </div>
                    </div>
                    <div id="child1" class="float-child">
                        <SnakeGame />
                    </div>
                    <div id= "child2" class="float-child">
                        <SpotifyApi />
                    </div>
                    <div id="child4" class="float-child">
                        <Joke />
                    </div>
                </div>

            {/* <div id="child3" class="float-child">
                {this.state.isLogined &&
                    <div className="hello">
                        <p>Hello user! Use the W A S and D keys to play my snake game and listen to Spotify music of your choice!</p>
                    </div>
                }
            </div>
            <div id="child1" class="float-child">
                {this.state.isLogined  &&
                <SnakeGame />
                }
                {this.state.loggedin &&
                            <div>
                                <br></br>
                                <br></br>
                            </div>
                            }
            </div>
            <div id= "child2" class="float-child">
                {this.state.isLogined &&
                <div className="Spotify">
                    <SpotifyApi />
                </div>}
            </div> */}
    </div> 
  

    )
  }
}

export default GoogleBtn;