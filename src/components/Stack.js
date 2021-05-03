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
        const stack = this.props;
        const list = stack.map(card => {
            return <tr key={card.id} >

                <td onClick={() => this.clickEvent(card)}>{card.picture.title} </td>
                <td >{card.english}</td>
                <td>{card.spanish} </td>
                <td>
                    <button onClick={() => this.editEvent(card.english)}>E</button>
                    <button onClick={() => this.deleteEvent(card.english)}>D</button>
                </td>
            </tr>
        });

        const card = this.props.card;
        return (

            <div className="container">
                <div className="navbar">
                    <p>navbar</p>
                </div>
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

                <div className="details">
                    <p className="id">Id: {card.id}</p>
                    <p className="english">Eng: {card.english}</p>
                    <p className="spanish">Esp: {card.spanish}</p>
                    <p className="pictureTitle">Pic title: {card.picture}</p>
                    <img className="picture" src={`data:image/jpeg;base64,${card.image}`}></img>
                </div>
            </div>
        );





    };
};




export default Stack;