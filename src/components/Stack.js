import { Component } from "react";
import './Stack.css';
import Card from './Card';
import SelectedCard from "./SelectedCard";


class Stack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: null,
        }
    }

    postSelectedHandler = (x) => {
        this.setState({ selectedCard: x });
    }

    render() {
        let cardsToRender = [];
        if (this.props.stack) {          
                cardsToRender = this.props.stack.cards.map(card => {
                    return (
                        <Card key={card.english}
                            english={card.english}
                            spanish={card.spanish}
                            picture={card.picture}
                            userid={this.props.userid}
                            clicked={() => this.postSelectedHandler(card.english)}/>
                    )
                })           
        }

        return (           
            <div className="stackContainer">
                <table className="stackTable">
                    <thead><tr><th width="10%">Stack</th></tr></thead>
                    <tbody>
                        {cardsToRender}
                    </tbody>
                </table> 
                <SelectedCard 
                english={this.state.selectedCard}
                userid={this.props.userid} /> 
                </div> 
        );
    };
};
export default Stack;