import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './home.css';

const users = [
  '613ac660a26a66a52eadc02cda9f6c7e7326e675',
  '853c507c8abde6d6d82f2e84cc4ca65f82ae5a09',
  '537627a1e9456be6fc015800d23cf91a93555fe6',
  '861256673241f8a9e3b086b1b01e76143253c8fc'
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: users[Math.floor(Math.random() * 4)],
      password: ""
    };
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  setUserName(e) {
    this.setState({
      username: e.target.value
    });
  }

  setCookie(username) {
    return new Promise((resolve, reject) => {
      const date = new Date();
      date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      const cookie = "ETHAccount="+ username + `;${expires};path=/`;
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
    console.log("username: " + this.state.username);
    console.log("password: " + this.state.password);
    if ( this.state.password.trim() === "some-password" ) {
      // set cookie in here
      this.setCookie(this.state.username).then(() => {
        console.log("Set cookie and promise successfully. Redirecting to voting page.");
        this.props.history.push("/vote");
      });
    } else {
      console.log("incorrect login credentials.");
    }
  }

  render() {
    return <div className="home__container">
        <h1>Hyperledger Fabric with Hyperledger Burrow EVM chaincode plugin Demo</h1>
        <h4>Log In</h4>
        <form className="form__container" onSubmit={this.handleSubmit} action="POST">
          <input type="password" placeholder="Password" className="voting__input" onChange={this.setPassword} />
          <input className="duo__btn login__btn" type="submit" value="Login" name="submit" />
        </form>
      </div>;
  }
}

export default withRouter(Home);
