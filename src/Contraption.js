import React from 'react';
import * as Tone from 'tone';
import { Player } from 'tone';

function Contraption() {
    // const twoBopB = new Tone.Player('./Media/Backing/2bop_back160.mp3').toDestination();
    // twoBopB.autostart = true;
    // twoBopB.loop = true;
    return(
    <div>
    <main>
        <div>
            <h3>Start By Dragging and Dropping Some Beats</h3>
        </div>
        <div className="music-box">
            <div>
                <button 
                className="twobeat"
                // onClick={twoBopB}
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
};

export default Contraption;