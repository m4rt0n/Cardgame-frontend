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

    handleCallback = (childData) => {
        this.setState({ data: childData })
        console.log("handleCallback: ", childData)
    }

    postSelectedHandler = (x) => {
        this.setState({ selectedCard: x });
    }



    componentDidUpdate() {
        if (this.state.selectedCard) {
            console.log("selected state updated")
            console.log("selected card: ", this.state.selectedCard)
            
        }
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
                        clicked={() => this.postSelectedHandler(card)}
                    />
                )
            })
        }
        
        let selectedCard = <SelectedCard
        card={this.selectedCard}
    //   userid={this.props.userid}
    //   parentCallback={this.handleCallback}
    />
        return (
            <div className="stackContainer">
                <table className="stackTable">
                    <thead><tr><th width="10%" className="stackHeader">Stack</th></tr></thead>
                    <tbody onClick={this.onTrigger}>
                        {cardsToRender}
                    </tbody>
                </table>
                {selectedCard}
            </div>

        );
    }



};

export default Stack;