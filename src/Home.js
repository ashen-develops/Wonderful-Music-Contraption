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
        // 		// set the transport
		// Tone.Transport.bpm.value = 108;
		// Tone.Transport.loop = true;
		// Tone.Transport.loopStart = "4m";
		// Tone.Transport.loopEnd = "8m";
		
		// const kick = new Tone.Player({
		// 	url: "https://tonejs.github.io/audio/loop/kick.mp3",
		// 	loop: true
		// }).toDestination().sync().start(0);

		// const snare = new Tone.Player({
		// 	url: "https://tonejs.github.io/audio/loop/snare.mp3",
		// 	loop: true
		// }).toDestination().sync().start("2n");

		// const hh = new Tone.Player({
		// 	url: "https://tonejs.github.io/audio/loop/hh.mp3",
		// 	loop: true
		// }).toDestination().sync().start("3:3", "4n"); // start with an offset

		// // connect the UI with the components
		// document.querySelector("tone-play-toggle").addEventListener("start", () => Tone.Transport.start());
		// document.querySelector("tone-play-toggle").addEventListener("stop", () => Tone.Transport.stop());
		
		// // keep the playhead on track
		// setInterval(() => {
		// 	// scale it between 0-1
		// 	const progress = (Tone.Transport.progress + 1) / 2;
		// 	document.querySelector("#progress").style = `left: ${progress*100}%`;
		// }, 16);
        return(
            <div>
            <main>
                
            <div className="how-to">
                <h2>How To Use The App</h2>
                <p>Shoreditch readymade woke selfies salvia. Craft beer wayfarers austin put a bird on it af stumptown godard mustache pinterest. Cred activated charcoal swag man braid intelligentsia meggings. Tumblr normcore blog, williamsburg iceland asymmetrical artisan af. Palo santo shaman selvage, occupy four loko mixtape green juice sriracha distillery twee lo-fi tacos mlkshk. Mlkshk franzen occupy four loko.</p>
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

            <div className="quick-view">
                <h3>Quick View of Top Rated User Songs</h3>
                <p>Here will be a list with songs created by other users, they will be in order of rank with top rating at the top. If user is not logged in this will say "log in to view other people's songs"</p>
                <ul>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                    <li>Example</li>
                </ul>
            </div>
        </main>
        </div>
        )
    }
}

export default Home;