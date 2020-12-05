/* eslint-disable eqeqeq */
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
    handlePlayGroupOneTwoBeatOne = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded1");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(5.294)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupOneTwoBeatTwo = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded2");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(5.294).stop(10.558)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupTwoOneBeatOne = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded3");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(2.647)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupTwoOneBeatTwo = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded4");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(2.647).stop(5.294)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupTwoOneBeatThree = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded5");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(5.294).stop(7.941)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
      };
    handlePlayGroupTwoOneBeatFour = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded6");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(7.941).stop(10.558)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupThreeTwoBeatOne = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded7");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(2.647)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };
    handlePlayGroupThreeTwoBeatTwo = (a) => {
      Tone.start()
      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded8");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(2.647)
        Tone.Transport.start();
        console.log('transport started')
        // Tone.Transport.bpm.value = 160;
        Tone.Transport.loop = true;
        Tone.Transport.loopStart = 0;
        Tone.Transport.loopEnd = 10.558;
        // Tone.Transport.timeSignature = 4;
        
      });
    };

    handleSubmit = (e) => {
      e.preventDefault();
      //Tone.Transport.Toggle
      console.log("handle submit works");

      //create an object to store the search filters
      const testData = {};
  
      //get all the from data from the form component
      const formData = new FormData(e.target);
  
      //for each of the keys in form data populate it with form value
      for (let value of formData) {
        testData[value[0]] = value[1];
      }
  
      console.log(testData);
  
      const {
          groupOneTwoBeatOne,
          groupOneTwoBeatTwo,
          groupTwoOneBeatOne,
          groupTwoOneBeatTwo,
          groupTwoOneBeatThree,
          groupTwoOneBeatFour,
          groupThreeTwoBeatOne,
          groupThreeTwoBeatTwo
      } = testData;
      if (groupOneTwoBeatOne == 'Boppin'){
        this.handlePlayGroupOneTwoBeatOne(twoBopB)
      }
      else if (groupOneTwoBeatOne == 'Bass Baby'){
        this.handlePlayGroupOneTwoBeatOne(twoBassB)
      }
      else if (groupOneTwoBeatOne == 'Coffee Shop'){
        this.handlePlayGroupOneTwoBeatOne(twoCoffeeB)
      }
      else if (groupOneTwoBeatOne == 'Flourish'){
        this.handlePlayGroupOneTwoBeatOne(twoFlourishB)
      }
      else if (groupOneTwoBeatOne == 'Funky'){
        this.handlePlayGroupOneTwoBeatOne(twoFunkB)
      }
      else if (groupOneTwoBeatOne == 'Atmosphere'){
        this.handlePlayGroupOneTwoBeatOne(twoAtmosM)
      }
      else if (groupOneTwoBeatOne == 'Fun'){
        this.handlePlayGroupOneTwoBeatOne(twoFunM)
      }
      else if (groupOneTwoBeatOne == 'Guitar'){
        this.handlePlayGroupOneTwoBeatOne(twoGuitarM)
      }
      else if (groupOneTwoBeatOne == 'Koto'){
        this.handlePlayGroupOneTwoBeatOne(twoKotoM)
      }
      else if (groupOneTwoBeatOne == 'Big Koto'){
        this.handlePlayGroupOneTwoBeatOne(twoKotoTwoM)
      }
      else if (groupOneTwoBeatOne == 'Lofi'){
        this.handlePlayGroupOneTwoBeatOne(twoLofiM)
      }
      else if (groupOneTwoBeatOne == 'Piano'){
        this.handlePlayGroupOneTwoBeatOne(twoPianoM)
      }
      else if (groupOneTwoBeatOne == 'Piano Dos'){
        this.handlePlayGroupOneTwoBeatOne(twoPianoTwoM)
      }
      else if (groupOneTwoBeatOne == 'Koto Trap'){
        this.handlePlayGroupOneTwoBeatOne(twoTrapkotoM)
      }

      if (groupOneTwoBeatTwo == 'Boppin'){
        this.handlePlayGroupOneTwoBeatTwo(twoBopB)
      }
      else if (groupOneTwoBeatTwo == 'Bass Baby'){
        this.handlePlayGroupOneTwoBeatTwo(twoBassB)
      }
      else if (groupOneTwoBeatTwo == 'Coffee Shop'){
        this.handlePlayGroupOneTwoBeatTwo(twoCoffeeB)
      }
      else if (groupOneTwoBeatTwo == 'Flourish'){
        this.handlePlayGroupOneTwoBeatTwo(twoFlourishB)
      }
      else if (groupOneTwoBeatTwo == 'Funky'){
        this.handlePlayGroupOneTwoBeatTwo(twoFunkB)
      }
      else if (groupOneTwoBeatTwo == 'Atmosphere'){
        this.handlePlayGroupOneTwoBeatTwo(twoAtmosM)
      }
      else if (groupOneTwoBeatTwo == 'Fun'){
        this.handlePlayGroupOneTwoBeatTwo(twoFunM)
      }
      else if (groupOneTwoBeatTwo == 'Guitar'){
        this.handlePlayGroupOneTwoBeatTwo(twoGuitarM)
      }
      else if (groupOneTwoBeatTwo == 'Koto'){
        this.handlePlayGroupOneTwoBeatTwo(twoKotoM)
      }
      else if (groupOneTwoBeatTwo == 'Big Koto'){
        this.handlePlayGroupOneTwoBeatTwo(twoKotoTwoM)
      }
      else if (groupOneTwoBeatTwo == 'Lofi'){
        this.handlePlayGroupOneTwoBeatTwo(twoLofiM)
      }
      else if (groupOneTwoBeatTwo == 'Piano'){
        this.handlePlayGroupOneTwoBeatTwo(twoPianoM)
      }
      else if (groupOneTwoBeatTwo == 'Piano Dos'){
        this.handlePlayGroupOneTwoBeatTwo(twoPianoTwoM)
      }
      else if (groupOneTwoBeatTwo == 'Koto Trap'){
        this.handlePlayGroupOneTwoBeatTwo(twoTrapkotoM)
      }

      if (groupTwoOneBeatOne == 'AM'){
        this.handlePlayGroupTwoOneBeatOne(amB)
      }
      else if (groupTwoOneBeatOne == 'Funk'){
          this.handlePlayGroupTwoOneBeatOne(funkB)
      }
      else if (groupTwoOneBeatOne == 'OOO'){
          this.handlePlayGroupTwoOneBeatOne(oooB)
      }
      else if (groupTwoOneBeatOne == 'Rock'){
          this.handlePlayGroupTwoOneBeatOne(rockB)
      }
      else if (groupTwoOneBeatOne == 'Stand'){
          this.handlePlayGroupTwoOneBeatOne(standB)
      }
      else if (groupTwoOneBeatOne == 'Bingo'){
          this.handlePlayGroupTwoOneBeatOne(bongoBt)
      }
      else if (groupTwoOneBeatOne == 'Bongo'){
          this.handlePlayGroupTwoOneBeatOne(bongoTwoBt)
      }
      else if (groupTwoOneBeatOne == 'Clicky'){
          this.handlePlayGroupTwoOneBeatOne(clickBt)
      }
      else if (groupTwoOneBeatOne == 'PutPat'){
          this.handlePlayGroupTwoOneBeatOne(funkBt)
      }
      else if (groupTwoOneBeatOne == 'AC'){
          this.handlePlayGroupTwoOneBeatOne(rockBt)
      }
      else if (groupTwoOneBeatOne == 'Slow'){
          this.handlePlayGroupTwoOneBeatOne(slowrockBt)
      }
      else if (groupTwoOneBeatOne == 'tech'){
          this.handlePlayGroupTwoOneBeatOne(techBt)
      }
      else if (groupTwoOneBeatOne == 'Funk Melody'){
          this.handlePlayGroupTwoOneBeatOne(funkM)
      }
      else if (groupTwoOneBeatOne == 'Piano'){
          this.handlePlayGroupTwoOneBeatOne(pianoM)
      }
      else if (groupTwoOneBeatOne == 'Pixi'){
          this.handlePlayGroupTwoOneBeatOne(pixM)
      }


      if (groupTwoOneBeatTwo == 'AM'){
          this.handlePlayGroupTwoOneBeatTwo(amB) 
      }
      else if (groupTwoOneBeatTwo == 'Funk'){
          this.handlePlayGroupTwoOneBeatTwo(funkB)
      }
      else if (groupTwoOneBeatTwo == 'OOO'){
          this.handlePlayGroupTwoOneBeatTwo(oooB)
      }
      else if (groupTwoOneBeatTwo == 'Rock'){
          this.handlePlayGroupTwoOneBeatTwo(rockB)
      }
      else if (groupTwoOneBeatTwo == 'Stand'){
          this.handlePlayGroupTwoOneBeatTwo(standB)
      }
      else if (groupTwoOneBeatTwo == 'Bingo'){
          this.handlePlayGroupTwoOneBeatTwo(bongoBt)
      }
      else if (groupTwoOneBeatTwo == 'Bongo'){
          this.handlePlayGroupTwoOneBeatTwo(bongoTwoBt)
      }
      else if (groupTwoOneBeatTwo == 'Clicky'){
          this.handlePlayGroupTwoOneBeatTwo(clickBt)
      }
      else if (groupTwoOneBeatTwo == 'PutPat'){
          this.handlePlayGroupTwoOneBeatTwo(funkBt)
      }
      else if (groupTwoOneBeatTwo == 'AC'){
          this.handlePlayGroupTwoOneBeatTwo(rockBt)
      }
      else if (groupTwoOneBeatTwo == 'Slow'){
          this.handlePlayGroupTwoOneBeatTwo(slowrockBt)
      }
      else if (groupTwoOneBeatTwo == 'tech'){
          this.handlePlayGroupTwoOneBeatTwo(techBt)
      }
      else if (groupTwoOneBeatTwo == 'Funk Melody'){
          this.handlePlayGroupTwoOneBeatTwo(funkM)
      }
      else if (groupTwoOneBeatTwo == 'Piano'){
          this.handlePlayGroupTwoOneBeatTwo(pianoM)
      }
      else if (groupTwoOneBeatTwo == 'Pixi'){
          this.handlePlayGroupTwoOneBeatTwo(pixM)
      }


      if (groupTwoOneBeatThree == 'AM'){
          this.handlePlayGroupTwoOneBeatThree(amB) 
      }
      else if (groupTwoOneBeatThree == 'Funk'){
          this.handlePlayGroupTwoOneBeatThree(funkB)
      }
      else if (groupTwoOneBeatThree == 'OOO'){
          this.handlePlayGroupTwoOneBeatThree(oooB)
      }
      else if (groupTwoOneBeatThree == 'Rock'){
          this.handlePlayGroupTwoOneBeatThree(rockB)
      }
      else if (groupTwoOneBeatThree == 'Stand'){
          this.handlePlayGroupTwoOneBeatThree(standB)
      }
      else if (groupTwoOneBeatThree == 'Bingo'){
          this.handlePlayGroupTwoOneBeatThree(bongoBt)
      }
      else if (groupTwoOneBeatThree == 'Bongo'){
          this.handlePlayGroupTwoOneBeatThree(bongoTwoBt)
      }
      else if (groupTwoOneBeatThree == 'Clicky'){
          this.handlePlayGroupTwoOneBeatThree(clickBt)
      }
      else if (groupTwoOneBeatThree == 'PutPat'){
          this.handlePlayGroupTwoOneBeatThree(funkBt)
      }
      else if (groupTwoOneBeatThree == 'AC'){
          this.handlePlayGroupTwoOneBeatThree(rockBt)
      }
      else if (groupTwoOneBeatThree == 'Slow'){
          this.handlePlayGroupTwoOneBeatThree(slowrockBt)
      }
      else if (groupTwoOneBeatThree == 'tech'){
          this.handlePlayGroupTwoOneBeatThree(techBt)
      }
      else if (groupTwoOneBeatThree == 'Funk Melody'){
          this.handlePlayGroupTwoOneBeatThree(funkM)
      }
      else if (groupTwoOneBeatThree == 'Piano'){
          this.handlePlayGroupTwoOneBeatThree(pianoM)
      }
      else if (groupTwoOneBeatThree == 'Pixi'){
          this.handlePlayGroupTwoOneBeatThree(pixM)
      }


      if (groupTwoOneBeatFour == 'AM'){
          this.handlePlayGroupTwoOneBeatFour(amB) 
      }
      else if (groupTwoOneBeatFour == 'Funk'){
          this.handlePlayGroupTwoOneBeatFour(funkB)
      }
      else if (groupTwoOneBeatFour == 'OOO'){
          this.handlePlayGroupTwoOneBeatFour(oooB)
      }
      else if (groupTwoOneBeatFour == 'Rock'){
          this.handlePlayGroupTwoOneBeatFour(rockB)
      }
      else if (groupTwoOneBeatFour == 'Stand'){
          this.handlePlayGroupTwoOneBeatFour(standB)
      }
      else if (groupTwoOneBeatFour == 'Bingo'){
          this.handlePlayGroupTwoOneBeatFour(bongoBt)
      }
      else if (groupTwoOneBeatFour == 'Bongo'){
          this.handlePlayGroupTwoOneBeatFour(bongoTwoBt)
      }
      else if (groupTwoOneBeatFour == 'Clicky'){
          this.handlePlayGroupTwoOneBeatFour(clickBt)
      }
      else if (groupTwoOneBeatFour == 'PutPat'){
          this.handlePlayGroupTwoOneBeatFour(funkBt)
      }
      else if (groupTwoOneBeatFour == 'AC'){
          this.handlePlayGroupTwoOneBeatFour(rockBt)
      }
      else if (groupTwoOneBeatFour == 'Slow'){
          this.handlePlayGroupTwoOneBeatFour(slowrockBt)
      }
      else if (groupTwoOneBeatFour == 'tech'){
          this.handlePlayGroupTwoOneBeatFour(techBt)
      }
      else if (groupTwoOneBeatFour == 'Funk Melody'){
          this.handlePlayGroupTwoOneBeatFour(funkM)
      }
      else if (groupTwoOneBeatFour == 'Piano'){
          this.handlePlayGroupTwoOneBeatFour(pianoM)
      }
      else if (groupTwoOneBeatFour == 'Pixi'){
          this.handlePlayGroupTwoOneBeatFour(pixM)
      }

      
      if (groupThreeTwoBeatOne == 'Vocal: Baa'){
        this.handlePlayGroupThreeTwoBeatOne(twoVocalBa)
      }
      else if (groupThreeTwoBeatOne == 'Vocal: Indigo'){
          this.handlePlayGroupThreeTwoBeatOne(twoVocalIndig)
      }
      else if (groupThreeTwoBeatOne == 'Vocal: Runaway'){
          this.handlePlayGroupThreeTwoBeatOne(twoVocalRun)
      }

      
      if (groupThreeTwoBeatTwo == 'Vocal: Baa'){
        this.handlePlayGroupThreeTwoBeatTwo(twoVocalBa)
      }
      else if (groupThreeTwoBeatTwo == 'Vocal: Indigo'){
          this.handlePlayGroupThreeTwoBeatTwo(twoVocalIndig)
      }
      else if (groupThreeTwoBeatTwo == 'Vocal: Runaway'){
          this.handlePlayGroupThreeTwoBeatTwo(twoVocalRun)
      }
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