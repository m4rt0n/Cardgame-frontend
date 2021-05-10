import { Component } from "react";
import './SelectedCard.css';
import './Stack';

class SelectedCard extends Component {
    state = {
        picked: null
    }

    onTrigger = (event) => {
     //   this.props.parentCallback("xxxData from child: ");
        event.preventDefault();
        if(this.state.picked!==null){
            console.log("ontrigger reached picked state")
            if(this.state.picked!==undefined){
                console.log("ontrigger picked:",this.state.picked.card.english)
                this.props.parentCallback(`Data from child: ${this.state.picked.card.english}` );
            }
            
        }
    }

    componentDidUpdate() {
        if (this.props.card) {
            if (!this.state.picked || (this.state.picked && this.state.picked.card.english !== this.props.card.english)) {
    
                this.setState({ picked: this.props })
            }
        }
    }

    render() {
        let pickedCard = '';
        if (this.state.picked !== null) {
            if (this.state.picked !== undefined) {
                pickedCard = this.state.picked;
                console.log("pickedCard: ", pickedCard)
                return (
                    <table className="stackSelectCardTable"
                        onClick={this.onTrigger}>
                        <thead><tr><th>Card</th></tr></thead>
                        <tbody className="selectedCardDetails">
                            <tr><td><img className="selectedCardPicture" src={`data:image/jpeg;base64,${pickedCard.card.picture.image.data}`}
                                alt={pickedCard.card.picture.title}></img></td></tr>
                            <tr><td className="selectedCardEnglish">{pickedCard.card.english}</td></tr>
                            <tr><td className="selectedCardSpanish"> {pickedCard.card.spanish}</td></tr>
                            <tr><td className="selectedCardUserId"> {pickedCard.card.userid}</td></tr>
                        </tbody>
                    </table>
                )
            }
        } else { return (null) }
    }
}
export default SelectedCard;

