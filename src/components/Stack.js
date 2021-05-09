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
      //  this.props.parentCallback(this.state.selectedCar);
    }
/*
    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }
*/
handleCallback = (childData) => {
    this.setState({ data: childData })
    console.log("handleCallback: ",childData)
}

componentDidUpdate(){
    if(this.state.selectedCard){
        console.log("selected state updated")
    //    if (!this.state.selectedCard || (this.state.selectedCard && this.state.selectedCard.english !== this.props.english)) {
     //       this.props.parentCallback("Data from child");
      //  }
        
        
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
                            clicked={() => this.postSelectedHandler(card.english)}
                            />
                    )
                })           
        }

        return (           
            <div className="stackContainer">
                <table className="stackTable">
                    <thead><tr><th width="10%" className="stackHeader">Stack</th></tr></thead>
                    <tbody onClick={this.onTrigger}>
                        {cardsToRender}
                    </tbody>
                </table> 
                <SelectedCard 
                english={this.state.selectedCard}
                userid={this.props.userid} 
                parentCallback={this.handleCallback}
                /> 
                </div> 
        );
    };
};
export default Stack;