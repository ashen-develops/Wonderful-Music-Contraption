import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import Landing from './Landing';
import Home from './Home';
import Contraption from './Contraption';
// import MultiPlayer from "./MultiPlayer";

function App() {
  return (
    <div>
      {/* <Landing /> */}

      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/contraption" component={Contraption} />
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
