import React, { Component } from 'react';

class MessageList extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            //sentAt: 'this.props.firebase.database.ServerValue.TIMESTAMP',-- has errors
            //according to technical coach on slack, this will be used on upcoming checkpoints 
        };

        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount() {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat( message ) })
          });
      }

    render(){
        return (

            <div>
            

    {this.state.messages.map( (message, index) => {
        if (message.roomId === this.props.activeRoom.key) {
        return <section key={index} >
        {message.username} <br />
        {message.content} <br />
        <small>{message.sentAt}</small>
        </section>
    } 
  })
}

            </div>
        )   
    }
}


export default MessageList;