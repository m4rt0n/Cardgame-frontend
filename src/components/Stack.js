import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props){
        super(props);
      }
    

    
    clickEvent = (x) => {
        console.log('clicked: ', x.english);
        this.card = x;
        console.log('set new card: ', x.id);
    }
    editEvent = (x) => {
        console.log('edit: ', x);

    }
    deleteEvent = (x) => {
        console.log('delete: ', x);

    }
    addEvent = () => {
        console.log('add');
    }
    render() {


    if (this.props) {   
        const cards = this.props.cards;   
        //   const data = Array.from(this.props); 
        const list = cards.map(card => {
            return <tr key={card.english} >

                <td onClick={() => this.clickEvent(card)}>{card.picture.title} </td>
                <td >{card.english}</td>
                <td>{card.spanish} </td>
                <td>
                    <button onClick={() => this.editEvent(card.english)}>E</button>
                    <button onClick={() => this.deleteEvent(card.english)}>D</button>
                </td>              
            </tr>
        });

        return (

            <div className="container">
                <button onClick={this.addEvent}>Add</button>
                <table className="table">
                    <thead >
                        <tr >
                            <th width="10%" >Picture</th>
                            <th width="20%">English</th>
                            <th width="20%">Spanish</th>
                            <th width="10%">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>             
            </div>   
        );
        }else{console.log("no props in stack")}
    };
};




export default Stack;