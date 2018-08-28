import React, { Component } from 'react';

class User extends Component{

    signIn(){
        const provider = new this.props.firebase.auth.GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup( provider );
    }

    signOut(){
        this.props.firebase.auth().signOut();
    }

    componentDidMount(){
        this.props.firebase.auth().onAuthStateChanged( user => {
            this.props.setUser(user);
          });
    }

    render(){

        return(

            <div>

                <h4>
                    <small>USERNAME:</small> <br />
                    {this.props.user.displayName}
                </h4>

                <section>
                    <button onClick={()=>this.signIn()}>
                    <small>Click to</small> <br />
                    <strong> SIGN IN</strong>
                    </button>
                </section>
                <section>
                    <button>
                        <small>Click to</small> <br />
                        <strong>SIGN OUT</strong>
                    </button>
                </section>

            </div>

        )
    }
}

////update -- I did an npm update for assignment 5 submission
export default User