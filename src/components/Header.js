import React, { Component } from 'react'
import menuNav from '../menu.png'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service"


class Header extends Component {
    state = {
      
      toggle:false,
      loggedIn: 'adsf'
    }

    componentDidMount(){
        let currentUserId = TokenService.getUserId()
        console.log(currentUserId)
        if (currentUserId){
            this.setState({loggedIn: 'Log Out'})
        }
        else if (!currentUserId){
            this.setState({loggedIn: 'Sign In/Up'})
        }
    }

    logOutClick = () => {
        console.log('Logging out')
        TokenService.clearAuthToken()
        TokenService.getUserId = (id) => {
            console.log(id)
        }

        window.location = '/home'
    }
    Toggle = () => {
      this.setState({toggle:!this.state.toggle})
    }
    LoggedIn = () => {
        if(this.state.loggedIn === 'Log Out'){
            this.setState({loggedIn: 'Sign In/Up'})
            this.logOutClick();
        }
        else{
            window.location = '/'
        }
        console.log(this.state)
    }
    render(){
        // let {currentUserId} = TokenService.getUserId
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
                            <button className={this.state.toggle ? "link" : "show-nav"} onClick={() => { this.LoggedIn(); this.Toggle();}}>{this.state.loggedIn}</button>
                            </li>
                            {/* <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/loops">My Loops</Link>
                            </li> */}
                            {/* <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/social">Social Hub</Link>
                            </li>
                            <li>
                                <Link onClick={this.Toggle} className={this.state.toggle ? "link" : "show-nav"} to="/support">Support</Link>
                            </li> */}
                        </ul>
                        <div className="logged-in">
                            <button className="logged-in-btn" onClick={this.LoggedIn}>{this.state.loggedIn}</button>
                        </div>
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
                            {/* <li>
                                <Link className="desktop-link" to="/loops">My Loops</Link>
                            </li> */}
                            {/* <li>
                                <Link className="desktop-link" to="/social">Social Hub</Link>
                            </li>
                            <li>
                                <Link className="desktop-link" to="/support">Support</Link>
                            </li> */}
                        </ul>
                </header>
            </div>
        );
    }
}

export default Header;