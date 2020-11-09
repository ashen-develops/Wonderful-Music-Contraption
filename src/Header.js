import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    state = {
      toggle:false
    }
    Toggle = () => {
      this.setState({toggle:!this.state.toggle})
    }
    render(){
        return (
            <div>
                <header>
                    <div className="navBar">
                        <button 
                            onClick={this.Toggle}
                            class="menu">
                        </button>
                        <ul className={this.state.toggle ?  "show-nav" : "nav-links"}>
                            <li>
                                <Link class="link" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link class="link" to="/contraption">The Machine</Link>
                            </li>
                            <li>
                                <Link class="link" to="/loops">My Loops</Link>
                            </li>
                            <li>
                                <Link class="link" to="/social">Social Hub</Link>
                            </li>
                            <li>
                                <Link class="link" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <h1>Doc Ashen's</h1>
                    <h2>Wonderful Music Contraption</h2>
                </header>
            </div>
        );
    }
}

export default Header;