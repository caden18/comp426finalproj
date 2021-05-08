import React , { Component } from "react";
import fire from "./fire";
import Banner from './Banner';
import SnakeGame from './SnakeGame';
import SpotifyApi from './SpotifyApi';
import Joke from './joke';
// import './App.css';




class Home extends Component{
    constructor(props) {
        super(props)
        this.state={
            
        }
    }
    logout() {
        fire.auth().signOut();
    }
    render() {
        return(
            <main>
                <header className="BannerContainer">
                    <Banner />
                </header>
                <article class="all-browsers">
                    <h2>
                    Hello user, you are now logged in!
                    </h2>
                    <p>
                    Use the arrow keys or the keys W A S and D to play my snake game.
                    </p>
                    <article class="browser"> <SnakeGame/></article>
                    <br>
                    </br>
                    <br></br>
                </article>
                <article class="browser">
                    <h2>
                        Find Spotify music of your choice to listen to while you play! Just choose a genre and then select from a list of Spotify playlists.
                    </h2>
                    <SpotifyApi/>
                </article>
                <article class="browser"><Joke/></article>
                <footer>
                    <p>©Copyright 2050 by nobody. All rights reversed.</p>
                    <button onClick={this.logout}>Logout</button>
                </footer>
            </main>
            // <div className="appcontainer">
            //     <div className="BannerContainer">
            //           <Banner />
            //           <br>
            //           </br>
            //           <br>
            //           </br>
            //           <br>
            //           </br>
            //           <br>
            //           </br>
            //         <div>
            //             <button onClick={this.logout}>Logout</button>
            //         </div>
            //     </div>
            //     <div class="float-container">
            //         <div id="child3" class="float-child"> 
            //             <div className="hello">
            //                 <p>Hello user, you are now logged in! <br>
            //                 </br>Use the arrow keys to play my snake game and find Spotify music of your choice to listen to!</p>
            //             </div>
            //         </div>
            //         <div id="child1" class="float-child">
            //             <SnakeGame />
            //         </div>
            //         <div id= "child2" class="float-child">
            //             <SpotifyApi />
            //         </div>
            //         <div id="child4" class="float-child">
            //             <Joke />
            //         </div>
            //     </div>
            // </div>
        )
    }

}
export default Home;