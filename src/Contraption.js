import React from 'react';
import * as Tone from 'tone';
import twoBopB from "./Media/Backing/2bop_back160.mp3"
import twoFunkB from "./Media/Backing/2funk_back160.mp3"
import twoSunB from "./Media/Backing/2sun_back.mp3"
import twoBassB from "./Media/Backing/2bop_back160.mp3"
import twoCoffeeB from "./Media/Beats/bongo_beat160.mp3"
import twoFlourishB from "./Media/Backing/2sun_back.mp3"
import amB from "./Media/Backing/am_back160.mp3"
import funkB from "./Media/Backing/funk_back160.mp3"
import oooB from "./Media/Backing/ooo_back160.mp3"
import rockB from "./Media/Backing/rock_back160.mp3"
import standB from "./Media/Backing/stand_back160.mp3"
import bongoBt from "./Media/Beats/bongo_beat160.mp3"
import bongoTwoBt from "./Media/Beats/bongo2_beat160.mp3"
import clickBt from "./Media/Beats/click_beat160.mp3"
import funkBt from "./Media/Beats/funk_beat160.mp3"
import rockBt from "./Media/Beats/rock_beat160.mp3"
import slowrockBt from "./Media/Beats/slowrock_beat160.mp3"
import techBt from "./Media/Beats/tech_beat160.mp3"
import twoAtmosM from "./Media/Melody/2atmos_melody160.mp3"
import twoFunM from "./Media/Melody/2fun_melody.mp3"
import twoGuitarM from "./Media/Melody/2guitar_melody160.mp3"
import twoKotoM from "./Media/Melody/2koto_melody160.mp3"
import twoKotoTwoM from "./Media/Melody/2koto2_melody160.mp3"
import twoLofiM from "./Media/Melody/2lofi_melody160.mp3"
import twoPianoM from "./Media/Melody/2piano_melody160.mp3"
import twoPianoTwoM from "./Media/Melody/2piano2_melody160.mp3"
import twoTrapkotoM from "./Media/Melody/2trapkoto_melody.mp3"
import funkM from "./Media/Melody/funk_melody.mp3"
import pianoM from "./Media/Melody/piano_melody160.mp3"
import pixM from "./Media/Melody/pix_melody160.mp3"
import twoVocalBa from "./Media/Vocals/2ba_vocals160.mp3"
import twoVocalIndig from "./Media/Vocals/2indig_melody.mp3"
import twoVocalRun from "./Media/Vocals/2runaway_vocals.mp3"


// const buffer = new Tone.ToneAudioBuffer("./Media/Backing/2bop_back160.mp3", () => {
//     console.log("loaded");
// });
// function load(){
//     buffer.load()
// }
// const player = new Tone.Player({mp3}).toDestination();


class Contraption extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle:false,
          }
    }
    // handlePlayTwoBopB = () => {
    //     const pianoSamples = new Tone.ToneAudioBuffers({
    //         A2: twoBopB
    //     }, () => {
    //         const player = new Tone.Player().toDestination();
    //         // play one of the samples when they all load
    //         player.buffer = pianoSamples.get("A2");
    //         player.loop = true;
    //         player.start();
    //     });
    // }
    // handlePlayBongoBt = () => {
    //     const pianoSamples = new Tone.ToneAudioBuffers({
    //         A2: bongoBt
    //     }, () => {
    //         const player = new Tone.Player().toDestination();
    //         // play one of the samples when they all load
    //         player.buffer = pianoSamples.get("A2");
    //         player.loop = true;
    //         player.start();
    //     });
    // }
    // handlePlaySunB = () => {
    //     const pianoSamples = new Tone.ToneAudioBuffers({
    //         A2: twoSunB,
    //     }, () => {
    //         const player = new Tone.Player().toDestination();
    //         // play one of the samples when they all load
    //         player.buffer = pianoSamples.get("A2");
    //         player.loop = true;
    //         player.start();
    //     });
    // }

    //NEW SYSTEM TODO
    //create a base handle play that takes in an option's value as an argument and queues up a that sound to be played
    handlePlay = (value) => {
        const player = new Tone.ToneAudioBuffers({
            A1: value
        }, () => {
            const play = new Tone.Player().toDestination();
            play.buffer = player.get("A1");
            play.loop = true;

        })
    }
    //create a function that handles submit and have it play all of the queued up sounds and loop them 
    
    render(){
        // To figure out ------------
        // Create options for each beat(or two) then 
        // Handle play (submit) to play all selected values in one loop then 
        // Figure out how to get each "measure" to play one after another
        return(
        <div>
        <main>

            <div>
                <h3>Experiment with some music</h3>
            </div>
                <form>
                    <div className="music-box">
                        <div class="twobeatOver">
                            <div class="twobeat">
                                <select id="groupOneTwoBeatOne">
                                    <option value={twoBopB}>Boppin'</option>
                                    <option value={twoBassB}>Bass Baby</option>
                                    <option value={twoCoffeeB}>Coffee Shop</option>
                                    <option value={twoFlourishB}>Flourish</option>
                                    <option value={twoFunkB}>Funky</option>
                                    <option value={twoAtmosM}>Atmosphere</option>
                                    <option value={twoFunM}>Fun</option>
                                    <option value={twoGuitarM}>Guitar</option>
                                    <option value={twoKotoM}>Koto</option>
                                    <option value={twoKotoTwoM}>Big Koto</option>
                                    <option value={twoLofiM}>Lofi</option>
                                    <option value={twoPianoM}>Piano</option>
                                    <option value={twoPianoTwoM}>Piano Dos</option>
                                    <option value={twoTrapkotoM}>Koto Trap</option>
                                </select>
                            </div>
                            <div class="twobeat">
                                <select id="groupOneTwoBeatTwo">
                                    <option value={twoBopB}>Boppin'</option>
                                    <option value={twoBassB}>Bass Baby</option>
                                    <option value={twoCoffeeB}>Coffee Shop</option>
                                    <option value={twoFlourishB}>Flourish</option>
                                    <option value={twoFunkB}>Funky</option>
                                    <option value={twoAtmosM}>Atmosphere</option>
                                    <option value={twoFunM}>Fun</option>
                                    <option value={twoGuitarM}>Guitar</option>
                                    <option value={twoKotoM}>Koto</option>
                                    <option value={twoKotoTwoM}>Big Koto</option>
                                    <option value={twoLofiM}>Lofi</option>
                                    <option value={twoPianoM}>Piano</option>
                                    <option value={twoPianoTwoM}>Piano Dos</option>
                                    <option value={twoTrapkotoM}>Koto Trap</option>
                                </select>
                            </div>
                        </div>

                        <div class="onebeatOver">
                            <div class="onebeat">
                                <select id="groupTwoOneBeatOne">
                                    <option value={amB}>AM</option>
                                    <option value={funkB}>Funk</option>
                                    <option value={oooB}>OOO</option>
                                    <option value={rockB}>Rock</option>
                                    <option value={standB}>Stand</option>
                                    <option value={bongoBt}>Bingo</option>
                                    <option value={bongoTwoBt}>Bongo</option>
                                    <option value={clickBt}>Clicky</option>
                                    <option value={funkBt}>PutPat</option>
                                    <option value={rockBt}>AC</option>
                                    <option value={slowrockBt}>Slow</option>
                                    <option value={techBt}>tech</option>
                                    <option value={funkM}>Funk Melody</option>
                                    <option value={pianoM}>Piano</option>
                                    <option value={pixM}>Pixi</option>
                                </select>
                            </div>
                            <div class="onebeat">
                                <select id="groupTwoOneBeatTwo">
                                    <option value={amB}>AM</option>
                                    <option value={funkB}>Funk</option>
                                    <option value={oooB}>OOO</option>
                                    <option value={rockB}>Rock</option>
                                    <option value={standB}>Stand</option>
                                    <option value={bongoBt}>Bingo</option>
                                    <option value={bongoTwoBt}>Bongo</option>
                                    <option value={clickBt}>Clicky</option>
                                    <option value={funkBt}>PutPat</option>
                                    <option value={rockBt}>AC</option>
                                    <option value={slowrockBt}>Slow</option>
                                    <option value={techBt}>tech</option>
                                    <option value={funkM}>Funk Melody</option>
                                    <option value={pianoM}>Piano</option>
                                    <option value={pixM}>Pixi</option>
                                </select>
                            </div>

                            <div class="onebeat">
                                <select id="groupTwoOneBeatThree">
                                    <option value={amB}>AM</option>
                                    <option value={funkB}>Funk</option>
                                    <option value={oooB}>OOO</option>
                                    <option value={rockB}>Rock</option>
                                    <option value={standB}>Stand</option>
                                    <option value={bongoBt}>Bingo</option>
                                    <option value={bongoTwoBt}>Bongo</option>
                                    <option value={clickBt}>Clicky</option>
                                    <option value={funkBt}>PutPat</option>
                                    <option value={rockBt}>AC</option>
                                    <option value={slowrockBt}>Slow</option>
                                    <option value={techBt}>tech</option>
                                    <option value={funkM}>Funk Melody</option>
                                    <option value={pianoM}>Piano</option>
                                    <option value={pixM}>Pixi</option>
                                </select>
                            </div>
                            <div class="onebeat">
                                <select id="groupTwoOneBeatFour">
                                    <option value={amB}>AM</option>
                                    <option value={funkB}>Funk</option>
                                    <option value={oooB}>OOO</option>
                                    <option value={rockB}>Rock</option>
                                    <option value={standB}>Stand</option>
                                    <option value={bongoBt}>Bingo</option>
                                    <option value={bongoTwoBt}>Bongo</option>
                                    <option value={clickBt}>Clicky</option>
                                    <option value={funkBt}>PutPat</option>
                                    <option value={rockBt}>AC</option>
                                    <option value={slowrockBt}>Slow</option>
                                    <option value={techBt}>tech</option>
                                    <option value={funkM}>Funk Melody</option>
                                    <option value={pianoM}>Piano</option>
                                    <option value={pixM}>Pixi</option>
                                </select>
                            </div>
                        </div>
                        <div class="twobeatOver">
                            <div class="twobeat">
                                <select id="groupThreeTwoBeatOne">
                                    <option value={twoVocalBa}>Vocal: Baa</option>
                                    <option value={twoVocalIndig}>Vocal: Indigo</option>
                                    <option value={twoVocalRun}>Vocal: Runaway</option>
                                </select>
                            </div>
                            <div class="twobeat">
                                <select id="groupThreeTwoBeatTwo">
                                    <option value={twoVocalBa}>Vocal: Baa</option>
                                    <option value={twoVocalIndig}>Vocal: Indigo</option>
                                    <option value={twoVocalRun}>Vocal: Runaway</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    

                    <div class="playButton">
                        <input type="submit" />
                    </div>
                </form>

        </main>
        </div>
        )
    }
};

export default Contraption;


// {/* <div>
// {/* <a href={this.twoBopB()}>link</a> */}
// <button 
// className="twobeat"
// onClick={this.handlePlayTwoBopB}
// ></button>
// <button 
// className="twobeat"
// onClick={this.handlePlaySunB}
// ></button>
// </div>
// <div>
// <button 
// className="onebeat"
// // on click add bongo beat to the loop (bongo2_beat160)
// onClick={this.handlePlayBongoBt}
// >    
// </button>
// <button 
// className="onebeat"
// // on click add bongo beat to the loop(bongo2_beat160)
// ></button>
// <button 
// className="onebeat"
// // on click add bongo beat to the loop(bongo2_beat160)
// ></button>
// <button 
// className="onebeat"
// // on click add bongo beat to the loop(bongo2_beat160)
// ></button>
// </div> */}