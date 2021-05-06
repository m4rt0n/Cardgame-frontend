import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: null
           }
    }


    postSelectedHandler = (x) => {
        this.setState({selectedCard: x});
        console.log('selected')
    }

    render() {
        let cardsToRender = [];
        console.log('stack props: ', this.props)
        if (this.props.stack) {
            console.log(this.props.stack)
            {
                cardsToRender = this.props.stack.cards.map(card => {
                    return (                      
                            <Card key={card.english}
                                english={card.english}
                                spanish={card.spanish}
                                picture={card.picture} 
                                clicked={() => this.postSelectedHandler(card.english)}
                                />
                        )
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

                <div className="selectCard">

                </div >
            </div>
        );
    };
};

export default Stack;