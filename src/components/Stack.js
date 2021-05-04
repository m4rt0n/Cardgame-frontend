import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props) {
        super(props);
    }
    state={
        selectedCard: null
      }
    
    

    

    render() {
        let cardsToRender = [];
        console.log('stack props: ', this.props)
        if (this.props.stack) {
            console.log(this.props.stack)
            {
                cardsToRender = this.props.stack.cards.map(card => {
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
                            <th width="10%" >Stack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cardsToRender}
                    </tbody>
                </table>

                <div className="Card">

                </div >
            </div>
        );
    };
};

export default Stack;