import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';


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
  render() {
    return (
      <section className="App">
      <div>
      <h1> Bloc Chat </h1>
       <RoomList firebase={firebase}/>
       </div>
       <div>
       <h1> Messages </h1>
       <MessageList firebase={firebase}/>
       </div>
      </section>
    );
  }
}

export default App;
