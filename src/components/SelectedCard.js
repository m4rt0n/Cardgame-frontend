import axios from "axios";
import { Component } from "react";
import './SelectedCard.css';
import './Stack';

class SelectedCard extends Component {
    state = {
        picked: null
    }

    onTrigger = (event) => {
        this.props.parentCallback("Data from child");
        event.preventDefault();
    }

    cardClick(x) {
        console.log(x)
        this.props.parentCallback("Data from child");
        x.preventDefault();
    }

    componentDidUpdate() {
        if (this.props.card) {
            console.log("props: ", this.props)
            if (!this.state.picked || (this.state.picked && this.state.picked.english !== this.props.english)) {
                /*
                const url = 'http://localhost:8080/users/getcardbyenglish/';
                axios.get(url, {
                    params: {
                        userid: this.props.userid,
                        english: this.props.english}
                })
                    .then(response => {
                        this.setState({ picked: response.data });                       
                    });
*/
              //  console.log("props: ", this.props)
                this.setState({ picked: this.props })
            }

        }else{console.log("no props")}
        console.log("picked: ", this.state.picked)
    }

    render() {
        let pickedCard = '';
        if (this.state.picked !== null) {
            console.log("picked state: ", this.state.picked)
            if (this.state.picked !== undefined) {
                pickedCard = this.state.picked;
                console.log("picked card: ",pickedCard)
                return (
                    <table className="stackSelectCardTable"
                        onClick={this.onTrigger}>
                        <thead><tr><th>Card</th></tr></thead>
                        <tbody className="selectedCardDetails">
                            <tr><td><img className="selectedCardPicture" src={`data:image/jpeg;base64,${pickedCard.picture.image.data}`}
                                alt={pickedCard.picture.title}></img></td></tr>
                            <tr><td className="selectedCardEnglish">{pickedCard.english}</td></tr>
                            <tr><td className="selectedCardSpanish"> {pickedCard.spanish}</td></tr>
                        </tbody>
                    </table>
                )
            } else { console.log("picked: undefined") }


        } else { return (null) }
    }
}
export default SelectedCard;

