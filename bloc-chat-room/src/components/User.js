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

            <div id='user-side'>

            <section className='username'>

                    USERNAME: <br />
                    <h2 className='user-name'>{this.props.user ? this.props.user.displayName:<small><i> Guest <br /> <small>You are not signed in</small></i></small>}</h2>

            
            </section>

 
                    <button onClick={()=>this.signIn()} className='signing'>
                    <small>Click to</small> <br />
                    <strong> SIGN IN</strong>
                    </button>
                
                    <button onClick={()=>this.signOut()} className='signing'>
                        <small>Click to</small> <br />
                        <strong>SIGN OUT</strong>
                    </button>

            </div>

        )
    }
}

export default User