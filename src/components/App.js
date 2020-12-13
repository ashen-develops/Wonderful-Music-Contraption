import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../style.css";
import Header from './Header';
import Landing from './Landing';
import Home from './Home';
import Contraption from './Contraption';
import SignUp from './SignUp';
import MyLoops from './MyLoops';

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
        <Route path="/loops" component={MyLoops} />
      </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
