import React, {Component} from 'react';
import * as Tone from 'tone'
import { Link } from 'react-router-dom'

class Home extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state = { tabControl: true };
    //     this.handleClick = this.handleClick.bind(this);
    //     this.tabControl = this.tabControl.bind(this);
    //   }
      
    //   tabControl(props){
    //       RoutePaths(this.props);
    //   }
    //   handleClick() {
    //       this.setState(function (prevState, props){
    //         return { tabControl: !prevState.tabControl }
    //     });
      
    //   }

    render(){

        return(
            <div>
            <main>
                
            <div className="how-to">
                <h2>How To Use The App</h2>
                <p>Hello dear user! I would like to thank you for visiting my site and trying out my Wonderful Music Contraption. It's pretty straight forward; if you're logged in (either with a demo account or your own personal account) then you just click the music button below and get creating </p>
                <h3>Working The Contraption</h3>
                <p>Basically the "Music Contraption" consists of a bunch of form input select boxes. Each large select box represents 2 beats, and each small one represents 1 beat. Boxes on top of eachother will play music on top of eachother as well, likewise, boxes after one another (left or right) will play in that order (left to right). Some combos will make your ears thank you for making such an amazing sound, while some combos will be telling you to hit the stop button as quickly as possible. Anyways! Have fun and good luck!</p>
            </div>

            <div className="music-btn">
                <h3>Let's Make Some Music!</h3>
                {/* <!-- this button will be able to link to the music contraption once React is implemented --> */}
                <Link className="trybtn abtn" to="/contraption">
                    Music
                </Link>
            </div>

        </main>
        </div>
        )
    }
}

export default Home;