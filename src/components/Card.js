
import { Component } from "react";
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <tr className="details"
        onClick={this.props.clicked}>
        <td><img className="picture" src={`data:image/jpeg;base64,${this.props.picture.image.data}`}></img></td>
        <td className="english">{this.props.english}</td>
        <td className="spanish"> {this.props.spanish}</td>
      </tr>

    )
  }
}
export default Card;