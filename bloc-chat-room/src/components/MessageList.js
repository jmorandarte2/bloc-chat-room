import React, { Component } from 'react';
import Moment from 'react-moment';

class MessageList extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: [],
            content: '',
            roomId: '',
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

      handleChange(e){
          
          this.setState({content: e.target.value});
      }
      sendMessage(){
          const message = {
            username: this.props.user ? this.props.user.displayName: 'Guest',
            content: this.state.content,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            roomId: this.props.activeRoom.key
        }
        this.messagesRef.push(message)
      }

      enterMessage(e) {
        e.preventDefault();
        if (!this.state.content) {return}
        this.sendMessage();
        this.setState({content: ''})
    }


    render(){
        return (

            <div>
 

    {this.state.messages.map( (message, index) => {
        if (message.roomId === this.props.activeRoom.key) {
        return <section key={index} >
        <i>{message.username} says:</i> <br />
        <strong>{message.content} </strong><br />
        <i><small><Moment>{message.sentAt}</Moment></small></i>
        </section>
    } 
  })
}
    <form onSubmit={(e)=>this.enterMessage(e)}>
        <input id='message'  type='text' placeholder='Enter Message Here' value={this.state.content} onChange={(e)=>this.handleChange(e)}/>
        <button id='sendB'>Send</button>
    </form>

            </div>
        )   
    }
}


export default MessageList;