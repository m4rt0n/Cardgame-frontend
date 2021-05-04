
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component{
state={
  id:'',
  english:'',
  spanish:'',
  picture:'',
  image:''
}



  render(){
 //   const card = this.props.card;
    return(
     
        
       <div className="details">  
        <tr className="id">Id: {this.state.id}</tr>
        <tr className="english">Eng: {this.state.english}</tr>
        <tr className="spanish">Esp: {this.state.spanish}</tr>
        <tr className="pictureTitle">Pic title: {this.state.picture}</tr>
        <img  className="picture"   src={`data:image/jpeg;base64,${this.state.image}`}></img>
      </div>
     
    );
  }

}

export default Card;