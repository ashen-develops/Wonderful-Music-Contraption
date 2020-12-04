import React from "react";
import * as Tone from "tone";
import twoBopB from "./Media/Backing/2bop_back160.mp3";
import twoFunkB from "./Media/Backing/2funk_back160.mp3";
import twoSunB from "./Media/Backing/2sun_back.mp3";
import twoBassB from "./Media/Backing/2bop_back160.mp3";
import twoCoffeeB from "./Media/Beats/bongo_beat160.mp3";
import twoFlourishB from "./Media/Backing/2sun_back.mp3";
import amB from "./Media/Backing/am_back160.mp3";
import funkB from "./Media/Backing/funk_back160.mp3";
import oooB from "./Media/Backing/ooo_back160.mp3";
import rockB from "./Media/Backing/rock_back160.mp3";
import standB from "./Media/Backing/stand_back160.mp3";
import bongoBt from "./Media/Beats/bongo_beat160.mp3";
import bongoTwoBt from "./Media/Beats/bongo2_beat160.mp3";
import clickBt from "./Media/Beats/click_beat160.mp3";
import funkBt from "./Media/Beats/funk_beat160.mp3";
import rockBt from "./Media/Beats/rock_beat160.mp3";
import slowrockBt from "./Media/Beats/slowrock_beat160.mp3";
import techBt from "./Media/Beats/tech_beat160.mp3";
import twoAtmosM from "./Media/Melody/2atmos_melody160.mp3";
import twoFunM from "./Media/Melody/2fun_melody.mp3";
import twoGuitarM from "./Media/Melody/2guitar_melody160.mp3";
import twoKotoM from "./Media/Melody/2koto_melody160.mp3";
import twoKotoTwoM from "./Media/Melody/2koto2_melody160.mp3";
import twoLofiM from "./Media/Melody/2lofi_melody160.mp3";
import twoPianoM from "./Media/Melody/2piano_melody160.mp3";
import twoPianoTwoM from "./Media/Melody/2piano2_melody160.mp3";
import twoTrapkotoM from "./Media/Melody/2trapkoto_melody.mp3";
import funkM from "./Media/Melody/funk_melody.mp3";
import pianoM from "./Media/Melody/piano_melody160.mp3";
import pixM from "./Media/Melody/pix_melody160.mp3";
import twoVocalBa from "./Media/Vocals/2ba_vocals160.mp3";
import twoVocalIndig from "./Media/Vocals/2indig_melody.mp3";
import twoVocalRun from "./Media/Vocals/2runaway_vocals.mp3";

class Contraption extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle: false
      };
    }
    handlePlayGroupOneTwoBeatOne = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0);
    };
    handlePlayGroupOneTwoBeatTwo = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0); 
    };
    handlePlayGroupTwoOneBeatOne = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0); 
  };
    handlePlayGroupTwoOneBeatTwo = (value) => {
        const player = new Tone.Player({
            url: value,
            loop: false
     }).toDestination().sync().start(0);
    };
    handlePlayGroupTwoOneBeatThree = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0);
    };
    handlePlayGroupTwoOneBeatFour = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0);
      };
    handlePlayGroupThreeTwoBeatOne = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0);
      };
    handlePlayGroupThreeTwoBeatTwo = (value) => {
		const player = new Tone.Player({
			url: value,
			loop: false
		}).toDestination().sync().start(0);
      };

      render() {
        // To figure out ------------
        // Handle play (submit) to play all selected values in one loop
        // Figure out how to get each "measure" to play one after another
        // Select boxes on change should put that value into the handlePlay function
        //
        return (
          <div>
            <main>
              <div>
                <h3>Experiment with some music</h3>
              </div>
              <form onSubmit={this.handleSubmit}>
                <div className="music-box">
                  <div className="twobeatOver">
                    <div className="twobeat">
                      <select
                        id="groupOneTwoBeatOne" 
                        name="groupOneTwoBeatOne"
                        // value={this.state.selectValue} 
                        // onChange={this.handleChange}
                        >
                        {/* <option defaultValue={twoBopB}>{twoBopB}</option> */}
                        <option defaultValue="">...</option>
                        <option defaultValue={twoBopB}>Boppin</option>
                        <option defaultValue={twoBassB}>Bass Baby</option>
                        <option defaultValue={twoCoffeeB}>Coffee Shop</option>
                        <option defaultValue={twoFlourishB}>Flourish</option>
                        <option defaultValue={twoFunkB}>Funky</option>
                        <option defaultValue={twoAtmosM}>Atmosphere</option>
                        <option defaultValue={twoFunM}>Fun</option>
                        <option defaultValue={twoGuitarM}>Guitar</option>
                        <option defaultValue={twoKotoM}>Koto</option>
                        <option defaultValue={twoKotoTwoM}>Big Koto</option>
                        <option defaultValue={twoLofiM}>Lofi</option>
                        <option defaultValue={twoPianoM}>Piano</option>
                        <option defaultValue={twoPianoTwoM}>Piano Dos</option>
                        <option defaultValue={twoTrapkotoM}>Koto Trap</option>
                      </select>
                    </div>
                    <div className="twobeat">
                      <select id="groupOneTwoBeatTwo" name="groupOneTwoBeatTwo">
                        <option defaultValue="">...</option>
                        <option defaultValue={twoBopB}>Boppin'</option>
                        <option defaultValue={twoBassB}>Bass Baby</option>
                        <option defaultValue={twoCoffeeB}>Coffee Shop</option>
                        <option defaultValue={twoFlourishB}>Flourish</option>
                        <option defaultValue={twoFunkB}>Funky</option>
                        <option defaultValue={twoAtmosM}>Atmosphere</option>
                        <option defaultValue={twoFunM}>Fun</option>
                        <option defaultValue={twoGuitarM}>Guitar</option>
                        <option defaultValue={twoKotoM}>Koto</option>
                        <option defaultValue={twoKotoTwoM}>Big Koto</option>
                        <option defaultValue={twoLofiM}>Lofi</option>
                        <option defaultValue={twoPianoM}>Piano</option>
                        <option defaultValue={twoPianoTwoM}>Piano Dos</option>
                        <option defaultValue={twoTrapkotoM}>Koto Trap</option>
                      </select>
                    </div>
                  </div>
    
                  <div className="onebeatOver">
                    <div className="onebeat">
                      <select id="groupTwoOneBeatOne" name="groupTwoOneBeatOne">
                        <option defaultValue="">...</option>
                        <option defaultValue={amB}>AM</option>
                        <option defaultValue={funkB}>Funk</option>
                        <option defaultValue={oooB}>OOO</option>
                        <option defaultValue={rockB}>Rock</option>
                        <option defaultValue={standB}>Stand</option>
                        <option defaultValue={bongoBt}>Bingo</option>
                        <option defaultValue={bongoTwoBt}>Bongo</option>
                        <option defaultValue={clickBt}>Clicky</option>
                        <option defaultValue={funkBt}>PutPat</option>
                        <option defaultValue={rockBt}>AC</option>
                        <option defaultValue={slowrockBt}>Slow</option>
                        <option defaultValue={techBt}>tech</option>
                        <option defaultValue={funkM}>Funk Melody</option>
                        <option defaultValue={pianoM}>Piano</option>
                        <option defaultValue={pixM}>Pixi</option>
                      </select>
                    </div>
                    <div className="onebeat">
                      <select id="groupTwoOneBeatTwo" name="groupTwoOneBeatTwo">
                        <option defaultValue="">...</option>
                        <option defaultValue={amB}>AM</option>
                        <option defaultValue={funkB}>Funk</option>
                        <option defaultValue={oooB}>OOO</option>
                        <option defaultValue={rockB}>Rock</option>
                        <option defaultValue={standB}>Stand</option>
                        <option defaultValue={bongoBt}>Bingo</option>
                        <option defaultValue={bongoTwoBt}>Bongo</option>
                        <option defaultValue={clickBt}>Clicky</option>
                        <option defaultValue={funkBt}>PutPat</option>
                        <option defaultValue={rockBt}>AC</option>
                        <option defaultValue={slowrockBt}>Slow</option>
                        <option defaultValue={techBt}>tech</option>
                        <option defaultValue={funkM}>Funk Melody</option>
                        <option defaultValue={pianoM}>Piano</option>
                        <option defaultValue={pixM}>Pixi</option>
                      </select>
                    </div>
    
                    <div className="onebeat">
                      <select id="groupTwoOneBeatThree" name="groupTwoOneBeatThree">
                        <option defaultValue="">...</option>
                        <option defaultValue={amB}>AM</option>
                        <option defaultValue={funkB}>Funk</option>
                        <option defaultValue={oooB}>OOO</option>
                        <option defaultValue={rockB}>Rock</option>
                        <option defaultValue={standB}>Stand</option>
                        <option defaultValue={bongoBt}>Bingo</option>
                        <option defaultValue={bongoTwoBt}>Bongo</option>
                        <option defaultValue={clickBt}>Clicky</option>
                        <option defaultValue={funkBt}>PutPat</option>
                        <option defaultValue={rockBt}>AC</option>
                        <option defaultValue={slowrockBt}>Slow</option>
                        <option defaultValue={techBt}>tech</option>
                        <option defaultValue={funkM}>Funk Melody</option>
                        <option defaultValue={pianoM}>Piano</option>
                        <option defaultValue={pixM}>Pixi</option>
                      </select>
                    </div>
                    <div className="onebeat">
                      <select id="groupTwoOneBeatFour" name="groupTwoOneBeatFour">
                        <option defaultValue="">...</option>
                        <option defaultValue={amB}>AM</option>
                        <option defaultValue={funkB}>Funk</option>
                        <option defaultValue={oooB}>OOO</option>
                        <option defaultValue={rockB}>Rock</option>
                        <option defaultValue={standB}>Stand</option>
                        <option defaultValue={bongoBt}>Bingo</option>
                        <option defaultValue={bongoTwoBt}>Bongo</option>
                        <option defaultValue={clickBt}>Clicky</option>
                        <option defaultValue={funkBt}>PutPat</option>
                        <option defaultValue={rockBt}>AC</option>
                        <option defaultValue={slowrockBt}>Slow</option>
                        <option defaultValue={techBt}>tech</option>
                        <option defaultValue={funkM}>Funk Melody</option>
                        <option defaultValue={pianoM}>Piano</option>
                        <option defaultValue={pixM}>Pixi</option>
                      </select>
                    </div>
                  </div>
                  <div className="twobeatOver">
                    <div className="twobeat">
                      <select id="groupThreeTwoBeatOne" name="groupThreeTwoBeatOne">
                        <option defaultValue="">...</option>
                        <option defaultValue={twoVocalBa}>Vocal: Baa</option>
                        <option defaultValue={twoVocalIndig}>Vocal: Indigo</option>
                        <option defaultValue={twoVocalRun}>Vocal: Runaway</option>
                      </select>
                    </div>
                    <div className="twobeat">
                      <select id="groupThreeTwoBeatTwo" name="groupThreeTwoBeatTwo">
                        <option defaultValue="">...</option>
                        <option defaultValue={twoVocalBa}>Vocal: Baa</option>
                        <option defaultValue={twoVocalIndig}>Vocal: Indigo</option>
                        <option defaultValue={twoVocalRun}>Vocal: Runaway</option>
                      </select>
                    </div>
                  </div>
                </div>
    
                <div className="saveButton">
                  <button className="save">Save</button>
                </div>
                <div className="playButton">
                  <input type="submit" />
                </div>
              </form>
            </main>
          </div>
        );
      }
    }

    export default Contraption;