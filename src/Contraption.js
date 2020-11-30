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

// const buffer = new Tone.ToneAudioBuffer("./Media/Backing/2bop_back160.mp3", () => {
//     console.log("loaded");
// });
// function load(){
//     buffer.load()
// }
// const player = new Tone.Player({mp3}).toDestination();
Tone.Transport.bpm.value = 160;
Tone.Transport.loop = true;

class Contraption extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      player: new Tone.Player().toDestination();
    };
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
  applyEventUpdates (event, ramp) {
    if (event.newTempo && event.newTempo.unit === 'bpm') {
        if (ramp) {
            Tone.Transport.bpm.rampTo(event.newTempo.value, 1);
        } else {
            Tone.Transport.bpm.value = event.newTempo.value;
        }
    }

    if (event.newTimeSignature) {
        Tone.Transport.timeSignature = [
            event.newTimeSignature.numerator,
            event.newTimeSignature.denominator
        ];
    }
}

  play(track){
      const player = this.handlePlayGroupOneTwoBeatOne
      let measureCounter = 0;
      let firstEvent = true;

      Tone.Transport.stop();
      Tone.Transport.position = 0;
      Tone.Transport.cancel();

      for (const event of track) {
          if(firstEvent){
              this.applyEventUpdates(event, false);
              firstEvent = false;
          }
          Tone.Transport.schedule((time) => {
              this.applyEventUpdates(event, true);
              let relativeTime = 0;

              for(const beat of event.measure.beats) {
                  const duration = beat.duration

                  if (beat.type === 'beat') {
                      player.
                  }
              } 
          })
      }
  }

  //NEW SYSTEM TODO
  //create a base handle play that takes in an option's value as an argument and queues up a that sound to be played
  handlePlayGroupOneTwoBeatOne = (value) => {
    const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
        const play = new Tone.Player().toDestination().sync().start(0);
        play.buffer = player.get("A1");
        play.loop = true;
      }
    );
  };
  handlePlayGroupOneTwoBeatTwo = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination().sync().start();
          play.buffer = player.get("A1");
          play.loop = true;
      }
    ); 
  };
  handlePlayGroupTwoOneBeatOne = (value) => {
    const player = new Tone.ToneAudioBuffers(
    {
      A1: value,
    },
    () => {
        const play = new Tone.Player().toDestination().sync().start();
        play.buffer = player.get("A1");
        play.loop = true;
    }
  ); 
};
handlePlayGroupTwoOneBeatTwo = (value) => {
    const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
        const play = new Tone.Player().toDestination().sync().start(0);
        play.buffer = player.get("A1");
        play.loop = true;
      }
    );
  };
  handlePlayGroupTwoOneBeatThree = (value) => {
      const player = new Tone.ToneAudioBuffers(
      {
        A1: value,
      },
      () => {
          const play = new Tone.Player().toDestination().sync().start();
          play.buffer = player.get("A1");
          play.loop = true;
      }
    ); 
  };
  handlePlayGroupTwoOneBeatFour = (value) => {
    const player = new Tone.ToneAudioBuffers(
    {
      A1: value,
    },
    () => {
        const play = new Tone.Player().toDestination().sync().start();
        play.buffer = player.get("A1");
        play.loop = true;
        }
        ); 
    };
    handlePlayGroupThreeTwoBeatOne = (value) => {
        const player = new Tone.ToneAudioBuffers(
        {
        A1: value,
        },
        () => {
            const play = new Tone.Player().toDestination().sync().start();
            play.buffer = player.get("A1");
            play.loop = true;
        }
      ); 
    };
    handlePlayGroupThreeTwoBeatTwo = (value) => {
    const player = new Tone.ToneAudioBuffers(
    {
        A1: value,
    },
    () => {
        const play = new Tone.Player().toDestination().sync().start();
        play.buffer = player.get("A1");
        play.loop = true;
        }
      ); 
    };
  //create a function that handles submit and have it play all of the queued up sounds and loop them
  handleTransport = (beat) => {
    return beat
  }
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
        groupOneTwoBeatOne,
        groupOneTwoBeatTwo,
        groupTwoOneBeatOne,
        groupTwoOneBeatTwo,
        groupTwoOneBeatThree,
        groupTwoOneBeatFour,
        groupThreeTwoBeatOne,
        groupThreeTwoBeatTwo
    } = testData;
    this.handleTransport(groupOneTwoBeatOne)
    this.handleTransport(groupOneTwoBeatTwo)
    this.handleTransport(groupTwoOneBeatOne)
    this.handleTransport(groupTwoOneBeatTwo)
    this.handleTransport(groupTwoOneBeatThree)
    this.handleTransport(groupTwoOneBeatFour)
    this.handleTransport(groupThreeTwoBeatOne)
    this.handleTransport(groupThreeTwoBeatTwo)
    // create a function for GroupOneTwoBeatOne
    //     then get the value of GroupOneTwoBeatOne
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport first in line one

    // create a function for GroupOneTwoBeatTwo
    //     then get the value of GroupOneTwoBeatTwo
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport second in line one

    // create a function for GroupTwoOneBeatOne
    //     then get the value of GroupTwoOneBeatOne
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport first in line two

    // create a function for GroupTwoOneBeatTwo
    //     then get the value of GroupTwoOneBeatTwo
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport second in line two

    // create a function for GroupTwoOneBeatThree
    //     then get the value of GroupTwoOneBeatThree
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport third in line two

    // create a function for GroupTwoOneBeatFour
    //     then get the value of GroupTwoOneBeatFour
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport fourth in line two

    // create a function for GroupThreeOneBeatOne
    //     then get the value of GroupTwoOneBeatOne
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport first in line three

    // create a function for GroupThreeOneBeatTwo
    //     then get the value of GroupTwoOneBeatTwo
    //     use this value to do a handle transport (should be able to use something very similar to the handlePlay up above but with storing in a transport [see docs])
    //     make the value in the transport second in line three

    // then buffer and play the set up transport
    //     have the transport loop automatically until button is clicked again
  };

  render() {
    // To figure out ------------
    // Create options for each beat(or two) then
    // Handle play (submit) to play all selected values in one loop then
    // Figure out how to get each "measure" to play one after another
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
                  <select id="groupOneTwoBeatOne" name="groupOneTwoBeatOne">
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
                <div className="twobeat">
                  <select id="groupOneTwoBeatTwo" name="groupOneTwoBeatTwo">
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
                    <option defaultValue={twoVocalBa}>Vocal: Baa</option>
                    <option defaultValue={twoVocalIndig}>Vocal: Indigo</option>
                    <option defaultValue={twoVocalRun}>Vocal: Runaway</option>
                  </select>
                </div>
                <div className="twobeat">
                  <select id="groupThreeTwoBeatTwo" name="groupThreeTwoBeatTwo">
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
