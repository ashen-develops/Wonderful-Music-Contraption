import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./style.css";
import Header from './Header';
import Landing from './Landing';
import Home from './Home';
import Contraption from './Contraption';
import SignUp from './SignUp';
// import MultiPlayer from "./MultiPlayer";

function App() {
  return (
    <div>
      {/* <Header /> */}

      <BrowserRouter>
      <Header />
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
