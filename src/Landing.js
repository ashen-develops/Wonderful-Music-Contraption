import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: true,
            password: ''
        };
    }

    handlePasswordChange(password) {
        console.log('password', password)
        console.log(this.state)
        this.setState({ password: password });
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }

    componentDidMount() {
        if (this.props.password) {
            this.setState({ password: this.props.password });
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        window.location = '/home'
    }
    render() {
        return(
            <div className="Landing">

                <main>
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

                    <div className="login-form">
                        <h2>Login</h2>
                        <form className="login" onSubmit={this.handleSubmit}>
                            <label htmlFor="user">Username:</label>
                            <input
                                type="text" 
                                id="user" 
                                name="user" 
                            />
                            <label htmlFor="password">Password:</label>
                                <input
                                    type={this.state.hidden ? 'password' : 'text'}
                                    value={this.state.password}
                                    onChange={e => this.handlePasswordChange(e.target.value)}
                                    id="password"
                                    name="password" 
                                    />
                
                            <label htmlFor="show-pwd">
                                <input 
                                    className="show-pwd" 
                                    type="checkbox" 
                                    id="show-pwd"
                                    onChange={this.toggleShow}
                                    />Show Password
                            </label>
                            {/* <!-- <input class="submit" type="submit" value="Login"> --> */}
                    {/* <!-- THIS SVG LINE NEEDS SOME REFINING still have it kind of shakey on the rounded corners --> */}
                            <div className="container">
                            <div className="center">
                                <button className="btn" type="submit">
                                <svg width="190px" height="75px" viewBox="0 0 180 60" className="border">
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