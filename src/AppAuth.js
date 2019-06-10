import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import App from './App';
import Amplify from "aws-amplify";
import { withOAuth } from "aws-amplify-react";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

class AppAuth extends Component {
  state = {
    signedIn: false
  }

  render() {
    const handleClick = () => {
      if (!this.state.signedIn) {
        this.props.OAuthSignIn();
        this.setState({signedIn: true}, () => {
          console.log(this.state.signedIn); // Updated value here
        })
      }
      // else {
      //   this.props.signOut();
      //   this.setState({signedIn: false}, () => {
      //     console.log(this.state.signedIn); // Updated value here
      //   })
      // }
    }
    return (
      <div className="App">
        <header className="App-header">
          <App />
          {!this.state.signedIn && <button onClick={handleClick}>
            Sign in with gmail
          </button>}
        </header>
      </div>
    );
  }
}

export default withOAuth(AppAuth);