import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './home.css';

const users = [
  '9ab9dd6465daf96f9c53abd1d21f5cd2bc0df4ee',
  'd58bc8f6fb11ada3603ec72d5d584f0d3904746d',
  '3fdbee0cafb149617d8ec88f67daf825bb71fb95',
  '8b73e85b693af3d5f4fb11461f7a2f7e7e319ca2'
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.setPassword = this.setPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setPassword(e) {
    this.setState({
      password: e.target.value
    });
    this.setState({
      username: users[Math.floor(Math.random() * 4)]
    })
  }

  setUserName(e) {
    this.setState({
      username: e.target.value
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
    console.log("username: " + this.state.username);
    console.log("password: " + this.state.password);
    if ( this.state.password.trim() === "some-password" ) {
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
