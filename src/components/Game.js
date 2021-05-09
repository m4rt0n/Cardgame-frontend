import { Component } from "react";
import './Game.css';

class Game extends Component {


    render() {
        return (
            <table className="gameContainer">
                <thead>
                    <tr className="headers">
                        <th>H1</th>
                        <th>H2</th>
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
                        <td className="f2">F2</td>
                        <td className="f3">F3</td>
                    </tr>
                </tbody>
            </table>
        )
    }




}
export default Game;