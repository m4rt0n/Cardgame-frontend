import axios from "axios";
import { Component } from "react";
import './List.css';

class CardDetails extends Component{
    state={
        id:'',
        english:'',
        spanish:'',
        picture:'',
        image:'',
    }


    render(){
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
            <p className="id">Id: {this.state.id}</p>
            <p className="english">Eng: {this.state.english}</p>
            <p className="spanish">Esp: {this.state.spanish}</p>
            <p className="pictureTitle">Pic title: {this.state.picture}</p>
            <img  className="picture"   src={`data:image/jpeg;base64,${this.state.image}`}></img>
          </div>
          </div>  
        );
      }
}
export default CardDetails;