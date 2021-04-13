
import { render } from "@testing-library/react";
import axios from "axios";
import { Component } from "react";
import './getAllCards.css';
class GetAllCards extends Component{
    state={
        cards:[],
    }

    buttonEvent=()=>{
        axios.get('http://localhost:8081/cards/getall')
        .then(response=>{
    this.setState(
        {cards:response.data}  
        
    );
    console.log(response)
    console.log(this.state.message); 
        });
    };

    render(){
        const englishx=this.state.cards.map((card)=>{
            return(
                <div key={card.id}>{card.english}</div>
            );
        } );

        const spanishx=this.state.cards.map((card)=>{
            return(
                <div key={card.id}>{card.spanish}</div>
            );
        } );

        return(
            <div className="get-all-people">
                <p> Get card list:</p>
                <button onClick={() => this.buttonEvent()}>
                getList</button>
                <p>Cards:</p>
                <ul>{englishx}</ul>
                <ul>{spanishx}</ul>
            </div>
            )
            
    };
    
};
export default GetAllCards;