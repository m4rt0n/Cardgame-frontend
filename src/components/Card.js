
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component{
constructor(props){
  super(props);
}


  render(){
    const card = this.props.card;
    return(
      <div className="card">
        <div className="input">
      <p> Enter the word to search:</p>        
      <input type='text' 
      onChange={this.textEvent}>
        </input>
        </div>
        <div className="button">
      <button onClick={() => this.buttonEvent()}>
       getByEnglish </button>  
       </div>
       <div className="details">  
        <p className="id">Id: {card.id}</p>
        <p className="english">Eng: {card.english}</p>
        <p className="spanish">Esp: {card.spanish}</p>
        <p className="pictureTitle">Pic title: {card.picture}</p>
        <img  className="picture"   src={`data:image/jpeg;base64,${card.image}`}></img>
      </div>
      </div>  
    );
  }

}

export default Card;