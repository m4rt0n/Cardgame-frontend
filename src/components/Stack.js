import { Component } from "react";
import './Stack.css';
import Card from './Card';
import SelectedCard from "./SelectedCard";


class Stack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: null
        }
    }


    postSelectedHandler = (x) => {
        this.setState({ selectedCard: x });
        //  console.log('Stack : selected: ', x)
    }

    render() {
//card table
        let cardsToRender = [];
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

//select card
if (this.state.selectedCard == undefined) {
    console.log("Stack : selected: undefined")
} else {
    console.log('Stack : selected: defined')
}

        return (
            <div className="stackContainer">
                <table className="stackTable">   
                <thead><tr><th width="10%">Stack</th></tr></thead>                   
                           
                    <tbody>
                        {cardsToRender}
                    </tbody>
                </table>

                <div className="stackSelectCard">
                    <table className="stackSelectCardTable">
                        <thead><tr><th>Stack: selected card</th></tr></thead>                        
                        <tbody>
                        <SelectedCard english={this.state.selectedCard} />                        
                        </tbody>
                    </table>
                </div >
            </div>
        );
    };
};
//<SelectedCard english={selected.english} />
//<SelectedCard selectedCard />
export default Stack;