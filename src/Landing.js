import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ''
        };
        // this.handlePasswordChange = this.handlePasswordchange.bind(this);
        // this.toggleShow = this.toggleShow.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
    
    render() {
        return(
            <div className="Landing">

                <main>
                    <div class="signup">
                        {/* <!-- on click in JS this button will take you to the sign up page --> */}
                        <Link to="/signup">
                            <button class="signbtn">Sign Up</button>
                        </Link>
                    </div>

                    <div class="try">
                        {/* <!-- on click in JS this button will take you to the song maker page --> */}
                        <Link to="/contraption">
                            <button class="trybtn">Try out The Wonderous Contraption</button>
                        </Link>
                    </div>

                    <div class="login-form">
                        <h2>Login</h2>
                        <form class="login">
                            <label for="user">Username:</label>
                            <input
                                type="text" 
                                id="user" 
                                name="user" 
                            />
                            <label for="password">Password:</label>
                                <input
                                    type={this.state.hidden ? 'password' : 'text'}
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    id="password"
                                    name="password" 
                                    />
                
                            <label for="show-pwd">
                                <input 
                                    class="show-pwd" 
                                    type="checkbox" 
                                    id="show-pwd"
                                    onChange={this.toggleShow}
                                    />Show Password
                            </label>
                            {/* <!-- <input class="submit" type="submit" value="Login"> --> */}
                    {/* <!-- THIS SVG LINE NEEDS SOME REFINING still have it kind of shakey on the rounded corners --> */}
                            <div class="container">
                            <div class="center">
                                <Link to="/home">
                                <button class="btn">
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" class="bg-line" />
                                    <polyline points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1" class="hl-line" />
                                </svg>
                                <span>LOGIN</span>
                                </button>
                                </Link>
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