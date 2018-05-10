import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.setUserName = this.setUserName.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

    setPassword(e) {
        this.setState({
            password: e.target.value
        });
    }

  setCookie() {
    return new Promise((resolve, reject) => {
      const date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      const cookie = `ETHAccount=9ab9dd6465daf96f9c53abd1d21f5cd2bc0df4ee;${expires};path=/`;
      document.cookie = cookie;
      console.log(cookie);
      console.log(document.cookie);

      if (document.cookie && cookie) {
        resolve("Success");
      } else {
        reject(Error("Cookie was not set properly."));
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted.");
    if (
      this.state.username === "9ab9dd6465daf96f9c53abd1d21f5cd2bc0df4ee" &&
      this.state.password === "some-password"
    ) {
      // set cookie in here
      this.setCookie().then(() => {
        console.log("Set cookie and promise successfully. Redirecting to voting page.");
        this.props.history.push("/vote");
      });
    } else {
      console.log("incorrect login credentials.");
    }
  }

  render() {
    return <div className="home__container">
        <h1>Log In</h1>
        <h4>Fabric and Burrow EVM Demo</h4>
        <form className="form__container" onSubmit={this.handleSubmit} action="POST">
          <input type="text" placeholder="Username" className="voting__input" onChange={this.setUserName} />
          <input type="password" placeholder="Password" className="voting__input" onChange={this.setPassword} />
          <input className="duo__btn login__btn" type="submit" value="Login" name="submit" />
        </form>
      </div>;
  }
}

export default withRouter(Home);