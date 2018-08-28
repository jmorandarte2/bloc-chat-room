import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import User from './components/User';


  var config = {
    apiKey: "AIzaSyD58Rl6d8zC68DwShbg2LeedxEuHum8vhg",
    authDomain: "bloc-chat-ae300.firebaseapp.com",
    databaseURL: "https://bloc-chat-ae300.firebaseio.com",
    projectId: "bloc-chat-ae300",
    storageBucket: "bloc-chat-ae300.appspot.com",
    messagingSenderId: "183681412541"
  };
  firebase.initializeApp(config);

  class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        activeRoom: '',
        user:'',
    }
  }

  handleChange(e) {
    this.setState({activeRoom: e.target.value});
  }

  newActiveRoom (room){
    this.setState({activeRoom: room})
  }

  setUser(user){
    this.setState({user: user })
  }

  render() {
    return (
      <section className="App">
      <div>
      <h1> Bloc Chat </h1>
       <RoomList firebase={firebase}  newActiveRoom={(room)=> this.newActiveRoom(room)}  onChange={(e)=> this.handleChange(e)}  activeRoom={this.state.activeRoom}/>
       </div>
       <div>
       <h3> Messages </h3>
       <MessageList firebase={firebase} newActiveRoom={(room)=> this.newActiveRoom(room)} onChange={(e)=> this.handleChange(e)}  activeRoom={this.state.activeRoom}/>
       </div>

       <div>
         <User firebase={firebase} setUser={(user)=>this.setUser(user)} user={this.state.user}/>
       </div>
      </section>
    );
  }
}


//update -- I did an npm update for assignment 5 submission
export default App;
