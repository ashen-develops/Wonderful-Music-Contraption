import React, { Component } from "react";
import {NavLink, Link } from "react-router-dom";
import ApiContext from '../ApiContext'
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service"
import { getSongsForUser} from "../songs-helper"
import Song from "./Song"

class MyLoops extends Component {
    static contextType = ApiContext;
    constructor(props) {
        super(props);
    
        this.state = {
            songs: []
        };
      }

    handleDeleteSong = (songId) => {
        this.setState({
            songs: this.state.songs.filter((song) => song.id !== songId),
        });
    };
    
  render() {
    let currentUserId = TokenService.getUserId()
    const { user_id } = currentUserId 
    const {songs=[]} = this.context
    console.log("MyLoop page", songs, user_id)
    const songsForUser = getSongsForUser(songs, user_id)
      return (
        <div>
            <h2>My Saved Loops</h2>
            <ul className="song-list">
                {songsForUser.map(song => 
                    <li key={song.id}>
                        <Song 
                            id={song.id} 
                            name={song.song_name} 
                            modified={song.date_last_edited}
                            onDeleteSong={this.handleDeleteSong} />
                    </li>
                  )}
            </ul>
            <div className="try">
              {/* <!-- on click in JS this button will take you to the song maker page --> */}
              <Link className="trybtn abtn" to="/contraption">
                Back to The Contraption
              </Link>
            </div>
        </div>
      );
  }
}


export default MyLoops;