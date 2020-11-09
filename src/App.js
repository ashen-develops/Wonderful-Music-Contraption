import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import Landing from './Landing';
import Home from './Home';
import Contraption from './Contraption';
import SignUp from './SignUp';
// import MultiPlayer from "./MultiPlayer";

function App() {
  return (
    <div>
      <header>
        <h1>Doc Ashen's</h1>
        <h2>Wonderful Music Contraption</h2>
        <nav>
            <a href="home.html">Home</a>
            <a href="saved.html">My Loops</a>
            <a href="social.html">Social Hub</a>
            <a href="song.html">The Machine</a>
        </nav>
      </header>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/contraption" component={Contraption} />
        <Route path="/signup" component={SignUp} />
      </Switch>
      </BrowserRouter>
    </div>
    // // <div className="App">
    // //   <MultiPlayer
    // //     urls={[
    // //       "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    // //       "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    // //       "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
    // //     ]}
    // //   />
    // // </div>
    

    //   <footer>
    //     <p>contact me info and stuff</p>
    //   </footer>
      
    // </div>
  );
}

export default App;
