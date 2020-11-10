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
  );
}

export default App;
