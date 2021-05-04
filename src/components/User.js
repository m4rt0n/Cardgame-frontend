import axios from "axios";
import { Component } from "react";
import './User.css';
import Stack from './Stack';

class User extends Component{
    state={
details:[]
        /*
        username='',
        password='',
        email=''
        */
    }
    componentDidMount() {
        const url = 'http://localhost:8080/users/getuserbyid/';
        
        axios.get(url, { params: {userid: '608f0eeb4484a81565857f1a'}}
    ).then(response => {
            this.setState({
                details: response.data,
            });
            console.log(response)
        }
        );
    }

    render() {
        const details = this.state.details;
        const userStack= details.stack;
        return(
            <div className="user">
                <div className="userDetails">
            <p className="id">id: {details.id}</p>
            <p className="username">username: {details.username}</p>
            <p className="password">password: {details.password}</p>
            <p className="email">email: {details.email}</p>
            </div>

            <div className="stack">
<Stack stack = {userStack}/>
            </div>
            </div>
        )

        
    }
}
export default User;