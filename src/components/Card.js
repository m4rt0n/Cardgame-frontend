
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {isSelected: false};
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  
  handleClick=(param, name) =>{
    this.setState(state => ({
      isSelected: !state.isSelected
    }));

    if(!this.state.isSelected){console.log(name, ' selected')
  }else{console.log(name,' unselected')}
  }

  render() {
    
    let selectedCard = [];

    return (
      <div className="details" 
      onClick={(param) => this.handleClick(param, this.props.english)} >
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