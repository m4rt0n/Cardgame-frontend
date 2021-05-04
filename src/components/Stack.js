import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props) {
        super(props);

    }



    buttonEvent = (x) => {
        console.log('props: ', x);
    }




    render() {
        let itemsToRender = [];
        if (this.props) {
            console.log('props: ', this.props)
            if (this.props.stack) {
                console.log(this.props.stack)
                if (this.props.stack.cards) {
                    console.log(this.props.stack.cards)
                    {                       
                        itemsToRender = this.props.stack.cards.map(card => {
                            return (
                                <div className="cardList">
                                    <Card key={card.english}
                                        english={card.english}
                                        spanish={card.spanish}
                                        picture={card.picture}
                                    />
                                </div>)
                        })
                    }
                } else { console.log('cards undefined') }

            } else { console.log('stack undefined') }




            /*
            if (!Array.isArray(data) || !data.length) {
                console.log('data array is empty')
            }
    */
            

            return (
                <div className="container">
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
                            {itemsToRender}
                        </tbody>
                    </table>

                </div>
            );
        } else { console.log("no props") }
    };
};




export default Stack;