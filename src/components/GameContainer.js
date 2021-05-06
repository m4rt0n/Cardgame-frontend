import { Component } from "react";
import axios from "axios";
import User from './User';
import './User.css';

class GameContainer extends Component {
    state = {
        user1: [],
        user2: [],
        user1Id: '608f0eeb4484a81565857f19',
        user2id: '608f0eeb4484a81565857f1a'
    }

    componentDidMount() {
        const url = 'http://localhost:8080/users/getuserbyid/';
        axios.get(url, { params: { userid: this.state.user1Id } }
        ).then(response => {
            this.setState({
                user1: response.data,
            });
        });
    }

    render() {
        return (
            
            <User user={this.state.user1}/>
        )
    }

}
export default GameContainer