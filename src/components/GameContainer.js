import { Component } from "react";
import axios from "axios";
import User from './User';
import './User.css';
import './GameContainer.css'

class GameContainer extends Component {
    state = {
        user1: [],
        user2: [],
        user1id: '608f0eeb4484a81565857f19',
        user2id: '608f0eeb4484a81565857f1a'
    }

    componentDidMount() {
        const url = 'http://localhost:8080/game/loadplayers/';
        axios.get(url, { params: 
            { user1id: this.state.user1id, 
                user2id: this.state.user2id},
            }
        ).then(response => {
            this.setState({
                user1: response.data[0],
                user2:response.data[1]
            });
        });
    }

    render() {
        return (
           <table className="containerTable">
               <thead>
               <tr>
                  <th>user1</th>
                  <th>game desk</th>
                  <th>user2</th>
                  </tr> 
               </thead>  
               <tbody>
               <tr>
             <td className="u1">  <User user={this.state.user1}/></td>
             <td className="game">game stuff</td>
             <td className="u2"><User user={this.state.user2}/></td>
               </tr>
               </tbody>
               </table>  
                              
               
            
        )
    }

}
export default GameContainer