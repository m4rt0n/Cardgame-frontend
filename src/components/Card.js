import { render } from "@testing-library/react";
import axios from "axios";
import { Component } from "react";
import './Card.css';

class Card extends Component{
    state={
        searchId:'',
        id:'',
        english:'',
        spanish:'',
        picture:'',
        image:'',
    };

    textEvent=(event) =>{
        this.setState({searchId: event.target.value})
        console.log(this.state.searchId);
      };

      buttonEvent=()=>{ 
        axios.get('http://localhost:8081/cards/getbyenglish/'+this.state.searchId)
        .then(response=>{
          this.setState(
            {
            id: response.data.id,
            english: response.data.english,
            spanish: response.data.spanish,
            picture: response.data.picture.title,
            image: response.data.picture.image.data,
            }
          );
          console.log(response)
        });
        
  };



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

export default Card;