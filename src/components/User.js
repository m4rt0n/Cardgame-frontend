
import { Component } from "react";
import './User.css';
import Stack from './Stack';

class User extends Component {
    constructor(props) {
        super(props);
}

    render() {
         
     
        if(this.props){
            let user = this.props.user;
            return (           
                <div className="user">
                    <div className="userDetails">
                    <p>User</p>
                        <p className="id">id: {user.id}</p>
                        <p className="username">username: {user.username}</p>
                        <p className="password">password: {user.password}</p>
                        <p className="email">email: {user.email}</p>
                    </div>
                    <div className="stack">
                    <Stack stack={user.stack} />  
                    </div>
                </div>
            )
        }else{
            console.log("user undefined")
            return(null)
        }
        
    }
}

export default User;