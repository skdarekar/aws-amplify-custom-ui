import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';

//aws-amplify
import Amplify from 'aws-amplify';
import { 
  ConfirmSignIn, 
  ConfirmSignUp, 
  RequireNewPassword,
  VerifyContact, 
  withAuthenticator 
} from 'aws-amplify-react';
import { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';

import CustomAuth from './authentication/CustomAuth';

//configure amplify
Amplify.configure(awsconfig);

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount(){
    console.log("MOUNT")
    Auth.currentUserInfo().then(res=>{
      console.log(res);
      const { attributes } = res;
      this.setState({ user: attributes })
    })
  }
  onSignOut = () => {
    console.log("Sign Out");
    Auth.signOut()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Hello, {this.state.user.name ? this.state.user.name: "..."}</div>
          <img src={logo} className="App-logo" alt="logo" />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={this.onSignOut}
          >
            Sign out
        </Button>
        </header>
      </div>)
  }
}

export default withAuthenticator(App, false, [
  <CustomAuth/>,
  <ConfirmSignIn/>,
  <VerifyContact/>,
  <ConfirmSignUp/>,
  <RequireNewPassword />
]);