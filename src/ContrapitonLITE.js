import React from "react";
import * as Tone from "tone";
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
import funkM from "./Media/Melody/funk_melody.mp3";
import pianoM from "./Media/Melody/piano_melody160.mp3";
import pixM from "./Media/Melody/pix_melody160.mp3";


class Contraption extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle: false
      };
    }

    handlePlayGroupOneTwoBeatOne = (value) => {
        console.log('working')
      const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
          const play = new Tone.Player().toDestination();
          play.buffer = player.get("A1");
          play.loop = true;
          play.sync();
          play.start(0);
        }
      );
    };
    handlePlayGroupOneTwoBeatTwo = (value) => {
        const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
            const play = new Tone.Player().toDestination();
            play.buffer = player.get("A1");
            play.loop = true;
            play.sync();
            play.start('8n');
        }
      ); 
    };
    handlePlayGroupTwoOneBeatOne = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination();
          play.buffer = player.get("A1");
          play.loop = true;
          play.start();
      }
    ); 
  };
  handlePlayGroupTwoOneBeatTwo = (value) => {
      const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
          const play = new Tone.Player().toDestination();
          play.buffer = player.get("A1");
          play.loop = true;
          play.start();
        }
      );
    };
    handlePlayGroupTwoOneBeatThree = (value) => {
        const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
            const play = new Tone.Player().toDestination().sync().start('8n');
            play.buffer = player.get("A1");
            play.loop = true;
            play.start();
            Tone.Transport.start();
        }
      ); 
    };
    handlePlayGroupTwoOneBeatFour = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination().sync().start('12n');
          play.buffer = player.get("A1");
          play.loop = true;
          play.start();
          }
          ); 
      };

      handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle submit works");
        // const { groupOneTwoBeatOne } = e.target;
        // console.log(groupOneTwoBeatOne)
    
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
            groupTwoOneBeatOne,
            groupTwoOneBeatTwo,
            groupTwoOneBeatThree,
            groupTwoOneBeatFour
        } = testData;
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
      };

      handleStopGroupOneTwoBeatOne = (value) => {
        console.log('working')
        const player = new Tone.ToneAudioBuffers(
            {
            A1: value,
            },
            () => {
            const play = new Tone.Player().toDestination();
            play.buffer = player.get("A1");
            play.loop = true;
            play.stop();
            }
        );
    };
    handleStopGroupOneTwoBeatTwo = (value) => {
        const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
            const play = new Tone.Player().toDestination();
            play.buffer = player.get("A1");
            play.loop = true;
            play.stop();
        }
      ); 
    };
    handleStopGroupTwoOneBeatOne = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination();
          play.buffer = player.get("A1");
          play.loop = true;
          play.start();
          play.stop();
        }
      ); 
    };
  handleStopGroupTwoOneBeatTwo = (value) => {
      const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
          const play = new Tone.Player().toDestination();
          play.buffer = player.get("A1");
          play.loop = true;
          play.stop();
        }
      );
    };
    handleStopGroupTwoOneBeatThree = (value) => {
        const player = new Tone.ToneAudioBuffers(
        {
          A1: value,
        },
        () => {
            const play = new Tone.Player().toDestination().sync().start('8n');
            play.buffer = player.get("A1");
            play.loop = true;
            play.stop();
        }
      ); 
    };
    handleStopGroupTwoOneBeatFour = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination().sync().start('12n');
          play.buffer = player.get("A1");
          play.loop = true;
          play.start();
          play.stop();
          }
          ); 
      };

      handleStop = (e) => {
        e.preventDefault();
        Tone.start();
        console.log("handle submit works");
        // const { groupOneTwoBeatOne } = e.target;
        // console.log(groupOneTwoBeatOne)
    
        //create an object to store the search filters
        const testData = {};
    
        //get all the from data from the form component
        const formData = new FormData(document.getElementById("music-form"));
    
        //for each of the keys in form data populate it with form value
        for (let value of formData) {
          testData[value[0]] = value[1];
        }
    
        console.log(testData);
    
        const {
            groupTwoOneBeatOne,
            groupTwoOneBeatTwo,
            groupTwoOneBeatThree,
            groupTwoOneBeatFour
        } = testData;
        if (groupTwoOneBeatOne == 'AM'){
            this.handleStopGroupTwoOneBeatOne(amB)
        }
        else if (groupTwoOneBeatOne == 'Funk'){
            this.handleStopGroupTwoOneBeatOne(funkB)
        }
        else if (groupTwoOneBeatOne == 'OOO'){
            this.handleStopGroupTwoOneBeatOne(oooB)
        }
        else if (groupTwoOneBeatOne == 'Rock'){
            this.handleStopGroupTwoOneBeatOne(rockB)
        }
        else if (groupTwoOneBeatOne == 'Stand'){
            this.handleStopGroupTwoOneBeatOne(standB)
        }
        else if (groupTwoOneBeatOne == 'Bingo'){
            this.handleStopGroupTwoOneBeatOne(bongoBt)
        }
        else if (groupTwoOneBeatOne == 'Bongo'){
            this.handleStopGroupTwoOneBeatOne(bongoTwoBt)
        }
        else if (groupTwoOneBeatOne == 'Clicky'){
            this.handleStopGroupTwoOneBeatOne(clickBt)
        }
        else if (groupTwoOneBeatOne == 'PutPat'){
            this.handleStopGroupTwoOneBeatOne(funkBt)
        }
        else if (groupTwoOneBeatOne == 'AC'){
            this.handleStopGroupTwoOneBeatOne(rockBt)
        }
        else if (groupTwoOneBeatOne == 'Slow'){
            this.handleStopGroupTwoOneBeatOne(slowrockBt)
        }
        else if (groupTwoOneBeatOne == 'tech'){
            this.handleStopGroupTwoOneBeatOne(techBt)
        }
        else if (groupTwoOneBeatOne == 'Funk Melody'){
            this.handleStopGroupTwoOneBeatOne(funkM)
        }
        else if (groupTwoOneBeatOne == 'Piano'){
            this.handleStopGroupTwoOneBeatOne(pianoM)
        }
        else if (groupTwoOneBeatOne == 'Pixi'){
            this.handleStopGroupTwoOneBeatOne(pixM)
        }


        if (groupTwoOneBeatTwo == 'AM'){
            this.handleStopGroupTwoOneBeatTwo(amB) 
        }
        else if (groupTwoOneBeatTwo == 'Funk'){
            this.handleStopGroupTwoOneBeatTwo(funkB)
        }
        else if (groupTwoOneBeatTwo == 'OOO'){
            this.handleStopGroupTwoOneBeatTwo(oooB)
        }
        else if (groupTwoOneBeatTwo == 'Rock'){
            this.handleStopGroupTwoOneBeatTwo(rockB)
        }
        else if (groupTwoOneBeatTwo == 'Stand'){
            this.handleStopGroupTwoOneBeatTwo(standB)
        }
        else if (groupTwoOneBeatTwo == 'Bingo'){
            this.handleStopGroupTwoOneBeatTwo(bongoBt)
        }
        else if (groupTwoOneBeatTwo == 'Bongo'){
            this.handleStopGroupTwoOneBeatTwo(bongoTwoBt)
        }
        else if (groupTwoOneBeatTwo == 'Clicky'){
            this.handleStopGroupTwoOneBeatTwo(clickBt)
        }
        else if (groupTwoOneBeatTwo == 'PutPat'){
            this.handleStopGroupTwoOneBeatTwo(funkBt)
        }
        else if (groupTwoOneBeatTwo == 'AC'){
            this.handleStopGroupTwoOneBeatTwo(rockBt)
        }
        else if (groupTwoOneBeatTwo == 'Slow'){
            this.handleStopGroupTwoOneBeatTwo(slowrockBt)
        }
        else if (groupTwoOneBeatTwo == 'tech'){
            this.handleStopGroupTwoOneBeatTwo(techBt)
        }
        else if (groupTwoOneBeatTwo == 'Funk Melody'){
            this.handleStopGroupTwoOneBeatTwo(funkM)
        }
        else if (groupTwoOneBeatTwo == 'Piano'){
            this.handleStopGroupTwoOneBeatTwo(pianoM)
        }
        else if (groupTwoOneBeatTwo == 'Pixi'){
            this.handleStopGroupTwoOneBeatTwo(pixM)
        }


        if (groupTwoOneBeatThree == 'AM'){
            this.handleStopGroupTwoOneBeatThree(amB) 
        }
        else if (groupTwoOneBeatThree == 'Funk'){
            this.handleStopGroupTwoOneBeatThree(funkB)
        }
        else if (groupTwoOneBeatThree == 'OOO'){
            this.handleStopGroupTwoOneBeatThree(oooB)
        }
        else if (groupTwoOneBeatThree == 'Rock'){
            this.handleStopGroupTwoOneBeatThree(rockB)
        }
        else if (groupTwoOneBeatThree == 'Stand'){
            this.handleStopGroupTwoOneBeatThree(standB)
        }
        else if (groupTwoOneBeatThree == 'Bingo'){
            this.handleStopGroupTwoOneBeatThree(bongoBt)
        }
        else if (groupTwoOneBeatThree == 'Bongo'){
            this.handleStopGroupTwoOneBeatThree(bongoTwoBt)
        }
        else if (groupTwoOneBeatThree == 'Clicky'){
            this.handleStopGroupTwoOneBeatThree(clickBt)
        }
        else if (groupTwoOneBeatThree == 'PutPat'){
            this.handleStopGroupTwoOneBeatThree(funkBt)
        }
        else if (groupTwoOneBeatThree == 'AC'){
            this.handleStopGroupTwoOneBeatThree(rockBt)
        }
        else if (groupTwoOneBeatThree == 'Slow'){
            this.handleStopGroupTwoOneBeatThree(slowrockBt)
        }
        else if (groupTwoOneBeatThree == 'tech'){
            this.handleStopGroupTwoOneBeatThree(techBt)
        }
        else if (groupTwoOneBeatThree == 'Funk Melody'){
            this.handleStopGroupTwoOneBeatThree(funkM)
        }
        else if (groupTwoOneBeatThree == 'Piano'){
            this.handleStopGroupTwoOneBeatThree(pianoM)
        }
        else if (groupTwoOneBeatThree == 'Pixi'){
            this.handleStopGroupTwoOneBeatThree(pixM)
        }


        if (groupTwoOneBeatFour == 'AM'){
            this.handleStopGroupTwoOneBeatFour(amB) 
        }
        else if (groupTwoOneBeatFour == 'Funk'){
            this.handleStopGroupTwoOneBeatFour(funkB)
        }
        else if (groupTwoOneBeatFour == 'OOO'){
            this.handleStopGroupTwoOneBeatFour(oooB)
        }
        else if (groupTwoOneBeatFour == 'Rock'){
            this.handleStopGroupTwoOneBeatFour(rockB)
        }
        else if (groupTwoOneBeatFour == 'Stand'){
            this.handleStopGroupTwoOneBeatFour(standB)
        }
        else if (groupTwoOneBeatFour == 'Bingo'){
            this.handleStopGroupTwoOneBeatFour(bongoBt)
        }
        else if (groupTwoOneBeatFour == 'Bongo'){
            this.handleStopGroupTwoOneBeatFour(bongoTwoBt)
        }
        else if (groupTwoOneBeatFour == 'Clicky'){
            this.handleStopGroupTwoOneBeatFour(clickBt)
        }
        else if (groupTwoOneBeatFour == 'PutPat'){
            this.handleStopGroupTwoOneBeatFour(funkBt)
        }
        else if (groupTwoOneBeatFour == 'AC'){
            this.handleStopGroupTwoOneBeatFour(rockBt)
        }
        else if (groupTwoOneBeatFour == 'Slow'){
            this.handleStopGroupTwoOneBeatFour(slowrockBt)
        }
        else if (groupTwoOneBeatFour == 'tech'){
            this.handleStopGroupTwoOneBeatFour(techBt)
        }
        else if (groupTwoOneBeatFour == 'Funk Melody'){
            this.handleStopGroupTwoOneBeatFour(funkM)
        }
        else if (groupTwoOneBeatFour == 'Piano'){
            this.handleStopGroupTwoOneBeatFour(pianoM)
        }
        else if (groupTwoOneBeatFour == 'Pixi'){
            this.handleStopGroupTwoOneBeatFour(pixM)
        }
      };

    render() {
        return (
          <div>
            <main>
              <div>
                <h3>Experiment with some music</h3>
              </div>
              <form id="music-form" onSubmit={this.handleSubmit}>
                <div className="music-box">
    
                  <div className="onebeatOver">

                    <div className="onebeat">
                      <select id="groupTwoOneBeatOne" name="groupTwoOneBeatOne">
                        {/* <option value={amB}>AM</option>
                        <option value={funkB}>Funk</option>
                        <option value={oooB}>OOO</option>
                        <option value={rockB}>Rock</option>
                        <option value={standB}>Stand</option> */}
                        <option value="">...</option>
                        <option value={bongoBt}>Bingo</option>
                        <option value={bongoTwoBt}>Bongo</option>
                        <option value={clickBt}>Clicky</option>
                        <option value={funkBt}>PutPat</option>
                        <option value={rockBt}>AC</option>
                        <option value={slowrockBt}>Slow</option>
                        <option value={techBt}>tech</option>
                        {/* <option value={funkM}>Funk Melody</option>
                        <option value={pianoM}>Piano</option>
                        <option value={pixM}>Pixi</option> */}
                      </select>
                    </div>

                    <div className="onebeat">
                      <select id="groupTwoOneBeatTwo" name="groupTwoOneBeatTwo">
                        {/* <option value={amB}>AM</option> */}
                        <option value="">...</option>
                        <option value={funkB}>Funk</option>
                        {/* <option value={oooB}>OOO</option> */}
                        <option value={rockB}>Rock</option>
                        <option value={standB}>Stand</option>
                        <option value={bongoBt}>Bingo</option>
                        {/* <option value={bongoTwoBt}>Bongo</option>
                        <option value={clickBt}>Clicky</option>
                        <option value={funkBt}>PutPat</option>
                        <option value={rockBt}>AC</option>
                        <option value={slowrockBt}>Slow</option> */}
                        <option value={techBt}>tech</option>
                        <option value={funkM}>Funk Melody</option>
                        <option value={pianoM}>Piano</option>
                        <option value={pixM}>Pixi</option>
                      </select>
                    </div>
    
                    <div className="onebeat">
                      <select id="groupTwoOneBeatThree" name="groupTwoOneBeatThree">
                      <option value="">...</option>
                        {/* <option value={amB}>AM</option>
                        <option value={funkB}>Funk</option>
                        <option value={oooB}>OOO</option>
                        <option value={rockB}>Rock</option>
                        <option value={standB}>Stand</option>
                        <option value={bongoBt}>Bingo</option>
                        <option value={bongoTwoBt}>Bongo</option>
                        <option value={clickBt}>Clicky</option>
                        <option value={funkBt}>PutPat</option>
                        <option value={rockBt}>AC</option>
                        <option value={slowrockBt}>Slow</option> */}
                        {/* <option value={techBt}>tech</option> */}
                        <option value={funkM}>Funk Melody</option>
                        <option value={pianoM}>Piano</option>
                        <option value={pixM}>Pixi</option>
                      </select>
                    </div>
                    {/* <div className="onebeat">
                      <select id="groupTwoOneBeatFour" name="groupTwoOneBeatFour">
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
                    </div> */}
                  </div>
                </div>
    
                <div className="saveButton">
                  <button className="save">Save</button>
                </div>
                <div className="playStop">
                    <div className="playButton">
                        <input type="submit" value="Play" />
                    </div>
                    <div className="playStop">
                        <button onClick={this.handleStop}>Stop</button>
                    </div>
                </div>
              </form>
            </main>
          </div>
          
        );
      }

}

export default Contraption;