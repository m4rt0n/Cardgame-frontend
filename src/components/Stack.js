import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemsToRender = [];       
            console.log('stack props: ', this.props)
            if (this.props.stack) {
                console.log(this.props.stack)
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
            } else { console.log('stack undefined') }
            
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
    };
};

export default Stack;