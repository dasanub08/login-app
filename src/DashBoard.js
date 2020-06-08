import './App.css'
import React, { Component } from 'react';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
            isLoaded: false
        }
    }


    componentDidMount() {
        let url = "https://q3rgtdews6.execute-api.us-east-2.amazonaws.com/default/user";
        fetch(url).then(
            response => response.json()
                .then(
                    json => {
                        console.log(json.model.users);
                        this.setState({ isLoaded: true, userData: json.model.users })
                    }
                )
        )
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }



    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                    <a href="#About">Dash Home</a>
                    <a href="#Services">Table</a>
                    <a href="#Projects">Projects</a>
                    <a href="#Timeline">Timeline</a>
                    <a href="#Calendar">Calendar</a>
                    <a href="#Integration">Integration</a>
                    <a href="#Statistics">Statistics</a>
                    <a href="#Settings">Settings</a>

                </div>
                <span className="openNav" onClick={this.openNav}>&#9776; Epic Admin DashBoard </span>

                <div className="topnav" id="resTopnav">
                    <a href="#home">About</a>
                    <a href="#news">News</a>
                    <a href="#contact">Notifications</a>
                    <a href="#about">Users</a>


                </div>
                <div className="App-header">


                    {
                        this.state.isLoaded ?
                            <table className="users">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.userData.map(value => {
                                        return (
                                            <>
                                                <tr key={value.id}>
                                                    <td>{value.name}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.phone}</td>
                                                </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                            : null
                    }
                </div>
            </div>
        )
    }
}
export default DashBoard;