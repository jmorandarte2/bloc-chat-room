import React, { Component } from 'react';

class RoomList extends Component{
    constructor(props){
        super(props);
        this.state = {
            rooms: [],
            newRoomName: '',
            
          };

        this.roomsRef = this.props.firebase.database().ref('rooms');
    }
    
    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {
            const room = snapshot.val();
            room.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( room ) })
          });
      }

    handleChange(e) {
        this.setState({newRoomName: e.target.value});
    }

    newRoom(newRoomName){
        this.roomsRef.push({
            name: newRoomName
          });
    }

    
    enterRoomName(e) {
        e.preventDefault();
        if (!this.state.newRoomName) {return}
        this.newRoom(this.state.newRoomName);
        this.setState({newRoomName: ''})

    }    
    
    render(){
        return (
            <div>

            <section>

            <form className="addForm" onSubmit={(e)=>this.enterRoomName(e)}>

                <input type="text" placeholder="Enter Room Name" value= {this.state.newRoomName} onChange={(e)=>this.handleChange(e)}/>
                <button className="addbutton" >Add New Room</button>

            </form>

            </section>

            <section className="roomList">

            <h1> List of Available Rooms </h1>


            {
              this.state.rooms.map( (room, index) => 
            
                <li key = {index}> {room.name}</li>
                
              )
            }
            </section>

            </div>
        )
    }
}

export default RoomList;