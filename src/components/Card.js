
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  
  handleClick() {
    this.setState(state => ({
      isSelected: !state.isSelected
    }));
 // console.log('selected: ',x )
  }

  render() {

    let selectedCard = [];
if(this.state.isSelected){
  console.log('something is selected')
}

    return (
      <div className="details" onClick={this.handleClick} >
        <tr>
        <img className="picture" src={`data:image/jpeg;base64,${this.props.picture.image.data}`}></img>
        <td className="english">{this.props.english}</td>
        <td className="spanish"> {this.props.spanish}</td>
        </tr>
      </div>
    )
  }
}
export default Card;