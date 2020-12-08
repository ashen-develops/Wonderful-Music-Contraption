import React, { Component } from 'react'
import menuNav from './menu.png'
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
                            className="menu">
                                <img src={menuNav} alt="menu-bar" onClick={this.Toggle} />
                        </button>
                        <ul className={this.state.toggle ?  "show-nav" : "nav-links"}>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/home">Home</Link>
                            </li>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/contraption">The Machine</Link>
                            </li>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/loops">My Loops</Link>
                            </li>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/social">Social Hub</Link>
                            </li>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                    <h1 className="font-effect-3d">Doc Ashen's</h1>
                    <h2 className="outline">Wonderful Music Contraption</h2>
                    <ul className="desktop-nav">
                            <li>
                                <Link className="desktop-link" to="/home">Home</Link>
                            </li>
                            <li>
                                <Link className="desktop-link" to="/contraption">The Machine</Link>
                            </li>
                            <li>
                                <Link className="desktop-link" to="/loops">My Loops</Link>
                            </li>
                            <li>
                                <Link className="desktop-link" to="/social">Social Hub</Link>
                            </li>
                            <li>
                                <Link className="desktop-link" to="/support">Support</Link>
                            </li>
                        </ul>
                </header>
            </div>
        );
    }
}

export default Header;