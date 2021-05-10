import { Component } from "react";
import './Game.css';

class Game extends Component {

    startClick() {
        console.log("game started")
    }

    endClick() {
        console.log("game ended")
    }
    render() {
        if (this.props) {
            let user1 = this.props.user1;
            let user2 = this.props.user2;
        //    console.log("Game: users: ", user1, user2)

            return (
                <table className="gameContainer">
                    <thead>
                        <tr className="headers">
                            <th>H1</th>
                            <th>
                                <button onClick={this.startClick}>Start</button>
                            </th>
                            <th>H3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="content">
                            <td className="g1">G1</td>
                            <td className="g2">G2</td>
                            <td className="g3">G3</td>
                        </tr>
                        <tr className="footers">
                            <td className="f1">F1</td>
                            <td className="f2">
                                <button onClick={this.endClick}>End</button>
                            </td>
                            <td className="f3">F3</td>
                        </tr>
                    </tbody>
                </table>
            )
        }
    }





}
export default Game;