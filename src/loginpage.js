import React, { Component } from 'react';
import './App.css';
import DashBoard from './DashBoard';

class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginOpen: true
        }
    }

    loginUser(e) {
        e.preventDefault();
        let req = {
            user: document.getElementById("uname").value,
            pass: document.getElementById("pass").value
        }
        let url = `https://q3rgtdews6.execute-api.us-east-2.amazonaws.com/default/login?email=${req.user}&password=${req.pass}`
        fetch(url).then(response => response.json())
            .then(json => {
                if (json.msg === "success") {
                    this.setState({ isLoginOpen: false })
                }//open dashboard
                else {
                    alert("Invalid username or Password");
                }//view error
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.isLoginOpen ?
                        <div className="App-header">
                            <div className="inner-container" >

                                <div>
                                    <div className="header">
                                        <span>LOGIN</span>
                                    </div>
                                    <form className="box"
                                        onSubmit={e => this.loginUser(e)}>

                                        <div className="input-group">
                                            <label htmlFor="username" title="User Name cannot be empty">Username</label>
                                            <input
                                                type="text"
                                                name="username"
                                                id="uname"
                                                className="login-input"
                                                placeholder="Username"
                                                required
                                            />
                                        </div>

                                        <div className="input-group">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                id="pass"
                                                className="login-input"
                                                placeholder="Password"
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="login-btn"
                                        // onClick={loginUser()}
                                        >Sign In
            </button>
                                        <a href="./" className="input-group">
                                            Lost your Password?
            </a>
                                    </form>
                                </div >
                            </div>
                        </div > :
                        <DashBoard />
                }
            </div>
        );
    }
}
export default Loginpage;