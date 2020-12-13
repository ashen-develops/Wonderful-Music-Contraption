/* eslint-disable eqeqeq */
import React from "react";
import config from '../config'
import * as Tone from "tone";
import TokenService from '../services/token-service'
import ApiContext from '../ApiContext'

import twoBopB from "../Media/Backing/2bop_back160.mp3";
import twoFunkB from "../Media/Backing/2funk_back160.mp3";
// import twoSunB from "./Media/Backing/2sun_back.mp3";
import twoBassB from "../Media/Backing/2bop_back160.mp3";
import twoCoffeeB from "../Media/Beats/bongo_beat160.mp3";
import twoFlourishB from "../Media/Backing/2sun_back.mp3";
import amB from "../Media/Backing/am_back160.mp3";
import funkB from "../Media/Backing/funk_back160.mp3";
import oooB from "../Media/Backing/ooo_back160.mp3";
import rockB from "../Media/Backing/rock_back160.mp3";
import standB from "../Media/Backing/stand_back160.mp3";
import bongoBt from "../Media/Beats/bongo_beat160.mp3";
import bongoTwoBt from "../Media/Beats/bongo2_beat160.mp3";
import clickBt from "../Media/Beats/click_beat160.mp3";
import funkBt from "../Media/Beats/funk_beat160.mp3";
import rockBt from "../Media/Beats/rock_beat160.mp3";
import slowrockBt from "../Media/Beats/slowrock_beat160.mp3";
import techBt from "../Media/Beats/tech_beat160.mp3";
import twoAtmosM from "../Media/Melody/2atmos_melody160.mp3";
import twoFunM from "../Media/Melody/2fun_melody.mp3";
import twoGuitarM from "../Media/Melody/2guitar_melody160.mp3";
import twoKotoM from "../Media/Melody/2koto_melody160.mp3";
import twoKotoTwoM from "../Media/Melody/2koto2_melody160.mp3";
import twoLofiM from "../Media/Melody/2lofi_melody160.mp3";
import twoPianoM from "../Media/Melody/2piano_melody160.mp3";
import twoPianoTwoM from "../Media/Melody/2piano2_melody160.mp3";
import twoTrapkotoM from "../Media/Melody/2trapkoto_melody.mp3";
import funkM from "../Media/Melody/funk_melody.mp3";
import pianoM from "../Media/Melody/piano_melody160.mp3";
import pixM from "../Media/Melody/pix_melody160.mp3";
import twoVocalBa from "../Media/Vocals/2ba_vocals160.mp3";
import twoVocalIndig from "../Media/Vocals/2indig_melody.mp3";
import twoVocalRun from "../Media/Vocals/2runaway_vocals.mp3";

class Contraption extends React.Component {
  static contextType = ApiContext
    constructor(props) {
      super(props);
      this.state = {
        toggle: false,
        pBtn: "Start",
        songName: '',
        groupOneTwoBeatOne: '...',
        groupOneTwoBeatTwo: '...',
        groupTwoOneBeatOne: '...',
        groupTwoOneBeatTwo: '...',
        groupTwoOneBeatThree: '...',
        groupTwoOneBeatFour: '...',
        groupThreeTwoBeatOne: '...',
        groupThreeTwoBeatTwo: '...',
        sharable: 1
      }
    }

    componentDidMount() {
      let currentUserId = TokenService.getUserId()
      let currentUserToken = TokenService.getAuthToken()
      console.log(currentUserId, currentUserToken)
      console.log(TokenService.hasAuthToken())

      if (!TokenService.hasAuthToken()) {
          window.location = '/'
      }
    }

    handlePlayAll = (a, b, c, d, e, f, g, h) => {
      Tone.start();
      Tone.Transport.loop = true;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = 10.558;

      const buffer = new Tone.ToneAudioBuffer(a, () => {
        console.log("loaded1");
        const player = new Tone.Player({
          url: buffer,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(5.294)
      });

      const buffer2 = new Tone.ToneAudioBuffer(b, () => {
        console.log("loaded2");
        const player = new Tone.Player({
          url: buffer2,
          loop: false
        }).toDestination();
        player.sync().start(5.294).stop(10.558)
      });

      const buffer3 = new Tone.ToneAudioBuffer(c, () => {
        console.log("loaded3");
        const player = new Tone.Player({
          url: buffer3,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(2.647)
      });

      const buffer4 = new Tone.ToneAudioBuffer(d, () => {
        console.log("loaded4");
        const player = new Tone.Player({
          url: buffer4,
          loop: false
        }).toDestination();
        player.sync().start(2.647).stop(5.294)
      });

      const buffer5 = new Tone.ToneAudioBuffer(e, () => {
        console.log("loaded5");
        const player = new Tone.Player({
          url: buffer5,
          loop: false
        }).toDestination();
        player.sync().start(5.294).stop(7.941)
      });

      const buffer6 = new Tone.ToneAudioBuffer(f, () => {
        console.log("loaded6");
        const player = new Tone.Player({
          url: buffer6,
          loop: false
        }).toDestination();
        player.sync().start(7.941).stop(10.558)
      });

      const buffer7 = new Tone.ToneAudioBuffer(g, () => {
        console.log("loaded7");
        const player = new Tone.Player({
          url: buffer7,
          loop: false
        }).toDestination();
        player.sync().start(0).stop(5.294)
      });

      const buffer8 = new Tone.ToneAudioBuffer(h, () => {
        console.log("loaded7");
        const player = new Tone.Player({
          url: buffer8,
          loop: false
        }).toDestination();
        player.sync().start(5.294).stop(10.558)
      });

      if (this.state.toggle){
        this.setState({ pBtn: "Start" })
        console.log("transport stopped")
        Tone.Transport.stop()
      }
      else if (this.state.toggle === false){
        this.setState({ pBtn: "Stop" })
        console.log("transport started")
        
        Tone.Transport.start()
      }

    }
    handleSubmitAll = (e) => {
      // if (this.state.toggle === false){
        e.preventDefault();
        console.log(Tone.ToneEvent._eventId)
      // }
      //Tone.Transport.Toggle
      console.log("handle submit works");

      this.handlePlayAll(this.state.groupOneTwoBeatOne, this.state.groupOneTwoBeatTwo, this.state.groupTwoOneBeatOne, this.state.groupTwoOneBeatTwo, this.state.groupTwoOneBeatThree, this.state.groupTwoOneBeatFour, this.state.groupThreeTwoBeatOne, this.state.groupThreeTwoBeatTwo)
      this.setState({
        toggle: !this.state.toggle
      })
    }

    handleSave = (e) => {
      let currentUserId = TokenService.getUserId()
      console.log(this.state)
      e.preventDefault();
      const music = {
        user_id: currentUserId,
        song_name: this.state.songName,
        group_one_two_beat_one: this.state.groupOneTwoBeatOne,
        group_one_two_beat_two: this.state.groupOneTwoBeatTwo,
        group_two_one_beat_one: this.state.groupTwoOneBeatOne,
        group_two_one_beat_two: this.state.groupTwoOneBeatTwo,
        group_two_one_beat_three: this.state.groupTwoOneBeatThree,
        group_two_one_beat_four: this.state.groupTwoOneBeatFour,
        group_three_two_beat_one: this.state.groupThreeTwoBeatOne,
        group_three_two_beat_two: this.state.groupThreeTwoBeatTwo,
        sharable: this.state.sharable, 
      };
      fetch(`${config.API_ENDPOINT}/music`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(music),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then((mus) => {
          this.context.addMusic(mus);
          this.props.history.push(`/api/music/${mus.id}`);
          window.location = `/loops/`;
        })
        .catch((error) => {
          console.error({ error });
        });

    };
    handleChange(e){
      Tone.start();
      this.setState({ [e.currentTarget.name]: e.currentTarget.value })
    }
      render() {
        // To figure out ------------
        return (
          <div>
            <main>
              <div>
                <h2>Make Some Noise!</h2>
                <p>Hello dear user! This app is very much so a WIP and has some quirks (such as my recommendation to turn down you're volume because I don't have every track's volume tweaked yet), however I would like to thank you for visiting my site and trying out my Wonderful Music Contraption. I hope to update this to a completely satisfying and viceral music experience, but for now enjoy what's here. 
                </p>

              </div>
              <form id="music-form" onSubmit={this.handleSubmitAll}>
                <div className="music-box">
                  <div className="twobeatOver">
                    <div className="twobeat">
                      <select
                        id="groupOneTwoBeatOne" 
                        name="groupOneTwoBeatOne"
                        onChange={e => this.handleChange(e)}
                        // value={this.state.selectValue} 
                        // onChange={this.handleChange}
                        >
                        {/* <option value={twoBopB}>{twoBopB}</option> */}
                        <option id="..." value="...">...</option>
                        <option value={twoBopB}>Boppin</option>
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
                    <div className="twobeat">
                      <select id="groupOneTwoBeatTwo" 
                      name="groupOneTwoBeatTwo"
                      onChange={e => this.handleChange(e)}>
                        <option id="..." value="...">...</option>
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
    
                  <div className="onebeatOver">
                    <div className="onebeat">
                      <select id="groupTwoOneBeatOne" 
                      name="groupTwoOneBeatOne"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
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
                    <div className="onebeat">
                      <select id="groupTwoOneBeatTwo" 
                      name="groupTwoOneBeatTwo"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
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
    
                    <div className="onebeat">
                      <select id="groupTwoOneBeatThree" 
                      name="groupTwoOneBeatThree"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
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
                    <div className="onebeat">
                      <select id="groupTwoOneBeatFour" 
                      name="groupTwoOneBeatFour"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
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
                  <div className="twobeatOver">
                    <div className="twobeat">
                      <select id="groupThreeTwoBeatOne" 
                      name="groupThreeTwoBeatOne"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
                        <option value={twoVocalBa}>Vocal: Baa</option>
                        <option value={twoVocalIndig}>Vocal: Indigo</option>
                        <option value={twoVocalRun}>Vocal: Runaway</option>
                      </select>
                    </div>
                    <div className="twobeat">
                      <select id="groupThreeTwoBeatTwo" 
                      name="groupThreeTwoBeatTwo"
                      onChange={e => this.handleChange(e)}>
                        <option value="">...</option>
                        <option value={twoVocalBa}>Vocal: Baa</option>
                        <option value={twoVocalIndig}>Vocal: Indigo</option>
                        <option value={twoVocalRun}>Vocal: Runaway</option>
                      </select>
                    </div>
                  </div>
                </div>
    
                  <div className="playButton">
                    <input className="play" type="submit" value={this.state.pBtn} />
                  </div>
              </form>

              {/* <div className="saveButton">
                    <form>
                      <input type="text" name="songName" onChange={(e) => this.handleChange(e)} />
                      <input type="submit" onClick={this.handleSave} className="save" value="Save" />
                    </form>
              </div> */}
              <p>These are all form inputs, similar to when websites ask you to select your state, but these state selectors have a magical quality! They create music! Each long select box counts for eight notes or two bars and each short box counts for four notes or just one bar. Some combos will be good, some will grate on your ears. Create you're favorite combo and sa- ... well you can't save just yet (will implement soon), but I guess just savor the moment until you have to reload the page (which the stop button will do for you until I can figure out how to not have one million sounds play at once everytime you start up a stopped procedure).</p>
            </main>
          </div>
      );
    }
}

export default Contraption;