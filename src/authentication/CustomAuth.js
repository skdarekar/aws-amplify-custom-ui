import React, { Component } from 'react';

import CustomSignIn from './CustomSignIn';
import CustomSignUp from './CustomSignUp';
import CustomForgotPassword from './reset-password/CustomForgotPassword';


class CustomAuth extends Component {

    render() {
        const { authState } = this.props;
        switch(authState){
            case "signIn":
                return <CustomSignIn changeState = {this.props.onStateChange}/>
            case "signUp":
                return <CustomSignUp changeState = {this.props.onStateChange}/>
            case "forgotPassword":
                return <CustomForgotPassword changeState = {this.props.onStateChange}/>
            default:
                return <h3>Loading...</h3>
        }
    }
}

export default CustomAuth;