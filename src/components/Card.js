
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="details">
        <tr className="id">Id: {this.props.id}</tr>
        <tr className="english">Eng: {this.props.english}</tr>
        <tr className="spanish">Esp: {this.props.spanish}</tr>
        <tr className="pictureTitle">Pic title: {this.props.picture.title}</tr>
        <img className="picture" src={`data:image/jpeg;base64,${this.props.picture.image.data}`}></img>
      </div>
    )
  }
}
export default Card;