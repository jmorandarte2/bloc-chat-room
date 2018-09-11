import React, { Component } from 'react';
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
        messageId: '',
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

  newMessage(message) {
    this.setState({ messageId: message })
  }

  render() {
    return (
      <section className="App">

      <section id='users'>
      <User firebase={firebase} setUser={(user)=>this.setUser(user)} user={this.state.user}/>
      </section>
      <div id='grids'>
      <section >
      <h1> Bloc Chat </h1>
       <RoomList firebase={firebase}  newActiveRoom={(room)=> this.newActiveRoom(room)}  onChange={(e)=> this.handleChange(e)}  activeRoom={this.state.activeRoom}/>
       </section>
       <section id='messages'>
       <h3> Messages </h3>
       <MessageList firebase={firebase} newActiveRoom={(room)=> this.newActiveRoom(room)} onChange={(e)=> this.handleChange(e)}  activeRoom={this.state.activeRoom} user={this.state.user}/>
       </section>
       </div>
      </section>
    );
  }
}



export default App;