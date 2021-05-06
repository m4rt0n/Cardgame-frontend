
import { Component } from "react";
import './Card.css';

class Card extends Component {

  render() {
    return (
      <tr className="details"
        onClick={this.props.clicked}>
        <td><img className="picture" src={`data:image/jpeg;base64,${this.props.picture.image.data}`}
      alt={this.props.picture.title}></img></td>
        <td className="english">{this.props.english}</td>
        <td className="spanish"> {this.props.spanish}</td>
      </tr>
    )
  }
}
export default Card;