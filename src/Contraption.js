import React from 'react';
import * as Tone from 'tone';
import mp3 from "./Media/Backing/2bop_back160.mp3"

// const buffer = new Tone.ToneAudioBuffer("./Media/Backing/2bop_back160.mp3", () => {
//     console.log("loaded");
// });
// function load(){
//     buffer.load()
// }
const player = new Tone.Player({mp3}).toDestination();


class Contraption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle:false,
            mp3: "./Media/Backing/2bop_back160.mp3"
          }
    }
    handlePlay = () => {
        const pianoSamples = new Tone.ToneAudioBuffers({
            A1: "https://tonejs.github.io/audio/casio/A1.mp3",
            A2: mp3,
        }, () => {
            const player = new Tone.Player().toDestination();
            // play one of the samples when they all load
            player.buffer = pianoSamples.get("A2");
            player.loop = true;
            player.start();
        });
    }
    
    render(){
        return(
        <div>
        <main>

            <div>
                <h3>Start By Dragging and Dropping Some Beats</h3>
            </div>
            <div className="music-box">
                <div>
                    {/* <a href={this.twoBopB()}>link</a> */}
                    <button 
                    className="twobeat"
                    onClick={this.handlePlay}
                    // on click add bop back to the loop (2bop_back160)
                    ></button>
                    <button 
                    className="twobeat"
                    // on click add bop back to the loop (2bop_back160)
                    ></button>
                </div>
                <div>
                    <button 
                    className="onebeat"
                    // on click add bongo beat to the loop (bongo2_beat160)
                    >    
                    </button>
                    <button 
                    className="onebeat"
                    // on click add bongo beat to the loop(bongo2_beat160)
                    ></button>
                    <button 
                    className="onebeat"
                    // on click add bongo beat to the loop(bongo2_beat160)
                    ></button>
                    <button 
                    className="onebeat"
                    // on click add bongo beat to the loop(bongo2_beat160)
                    ></button>
                </div>

            </div>

        </main>
        </div>
        )
    }
};

export default Contraption;