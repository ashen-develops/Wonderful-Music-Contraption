import React from "react";
import config from "./config";
import ApiContext from "./ApiContext";
import AuthApiService from "./services/auth-api-service";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  // handleLoginSuccess = user => {
  //     window.location = '/homePage'
  //   }

  handleSubmit = (e) => {
    // console.log(this.state)
    // e.preventDefault();
    // window.location = '/home'
    e.preventDefault();
    const user = {
      user_name: this.state.user,
      password: this.state.password
    };
    fetch(`${config.API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((user) => {
        this.context.addUser(user);
        this.props.history.push(`/api/users/${user.id}`);
        window.location = '/home'
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  handleChange(e) {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state.user);
  }
  render() {
    return (
      <div>
        <main>
          <div className="signup">
            <h2>Create Account</h2>
            <form className="signup-form">
              <label htmlFor="user">Create Username:</label>
              <input
                onChange={(e) => this.handleChange(e)}
                type="username"
                id="user"
                name="user"
              />
              <label htmlFor="password">Create Password:</label>
              <input
                onChange={(e) => this.handleChange(e)}
                type="password"
                id="password"
                name="password"
              />
              {/* <!-- <input type="submit" value="Sign Up"> --> */}
              <div className="container">
                <div className="center">
                  <button onClick={(e) => this.handleSubmit(e)} className="btn">
                    <svg
                      width="180px"
                      height="60px"
                      viewBox="0 0 180 60"
                      className="border"
                    >
                      <polyline
                        points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1"
                        className="bg-line"
                      />
                      <polyline
                        points="170,1 170,2 172,3 174,4 175,5 177,6 179,14 179,48 177,52 175,55 174,56 172,58 170,58, 168,59 13,60 5,55 3,53 1,50 0,14 5,5 10,2 13,1 170,1"
                        className="hl-line"
                      />
                    </svg>
                    <span>SIGN UP</span>
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

export default SignUp;
