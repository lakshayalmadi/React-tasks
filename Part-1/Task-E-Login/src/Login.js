import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className='container'>
                <div className='heading'>
                    <div className='logo'></div>
                    <div className='title'>Log-in to your account</div>
                </div>
                <div className='form'>
                    <div className='input'><input type="text" placeholder='Email address'/></div>
                    <div className='input'><input type="password" placeholder='Password'/></div>
                    <div className='input' id="btn"><input type="button" value='Login'/></div>
                </div>
                <div className='foot'>
                    New to us?<a href="#">Sign Up</a>
                </div>
            </div>
         );
    }
}
 
export default Login;