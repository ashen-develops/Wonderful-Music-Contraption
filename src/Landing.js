import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthApiService from "./services/auth-api-service";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            user: '',
            password: ''
        };
    }
    validateloginPassword(inputloginPassword) {
        let outputloginPassword = inputloginPassword;
        // at least one number, one lowercase and one uppercase letter
        // at least eight characters that are letters, numbers or the underscore
        let loginPasswordformat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{8,}$/;
    
        if (!inputloginPassword.match(loginPasswordformat)) {
          outputloginPassword = "";
        }
        return outputloginPassword;
      }


    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    handleChange(e) {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
        console.log(this.state);
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
    
        const { user, password } = event.target
    
        AuthApiService.postLogin({
          userName: user.value,
          password: password.value,
    
        })
    
          .then(res => {
            user.value = ''
            password.value = ''
            window.location = '/home'
    
    
          })
          .catch(err => {
            console.log(err);
          });
      }
    render() {
        return(
            <div>

                <main className="Landing">
                    <div className="landing-buttons">
                        <div className="signup">
                            {/* <!-- on click in JS this button will take you to the sign up page --> */}
                            <Link className="signbtn abtn" to="/signup">
                                Sign Up
                            </Link>
                        </div>

                        <div className="try">
                            {/* <!-- on click in JS this button will take you to the song maker page --> */}
                            <Link className="trybtn abtn" to="/contraption">
                                Try out The Wonderous Contraption
                            </Link>
                        </div>
                    </div>

                    <div className="login-form">
                        <h2>Login</h2>
                        <form className="login" onSubmit={this.handleSubmit}>
                            <label htmlFor="user">Username:</label>
                            <input
                                onChange={(e) => this.handleChange(e)}
                                value={this.state.user}
                                type="text" 
                                id="user" 
                                name="user" 
                            />
                            <label htmlFor="password">Password:</label>
                                <input
                                    type={this.state.hidden ? 'password' : 'text'}
                                    value={this.state.password}
                                    onChange={(e) => this.handleChange(e)}
                                    id="password"
                                    name="password" 
                                    />
                
                            <label htmlFor="show-pwd">
                                <input 
                                    className="show-pwd" 
                                    type="checkbox" 
                                    id="show-pwd"
                                    onChange={() => this.toggleShow()}
                                    />Show Password
                            </label>
                            {/* <!-- <input className="submit" type="submit" value="Login"> --> */}
                    {/* <!-- THIS SVG LINE NEEDS SOME REFINING still have it kind of shakey on the rounded corners --> */}
                            <div className="container">
                            <div className="center">
                                <button className="btn" type="submit">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" className="bg-line" />
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" className="hl-line" />
                                </svg>
                                <span>LOGIN</span>
                                </button>

                            </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        );
    }
}

export default Landing;