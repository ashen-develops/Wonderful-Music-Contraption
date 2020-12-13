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
                <p>Hello dear user! This app is very much so a WIP and has some quirks (such as my recommendation to turn down you're volume because I don't have every track's volume tweaked yet), however I would like to thank you for visiting my site and trying out my Wonderful Music Contraption. I hope to update this to a completely satisfying and viceral music experience, but for now enjoy what's here. </p>
                <h3>Description</h3>
                <p>I'm baby roof party gentrify vaporware waistcoat crucifix celiac coloring book. Chambray hashtag kale chips kogi aesthetic portland meditation. Wolf blue bottle polaroid, crucifix butcher forage hella intelligentsia brunch kickstarter jean shorts bicycle rights roof party chia. Microdosing dreamcatcher yr ugh leggings ethical. Cloud bread chia post-ironic selvage hell of forage chillwave.</p>
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