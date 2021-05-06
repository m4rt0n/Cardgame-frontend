import axios from "axios";
import { Component } from "react";
import './SelectedCard.css';
import './Stack';

class SelectedCard extends Component {
    state = {
        picked: null
    }

    componentDidUpdate() {
        if (this.props.english) {
            if (!this.state.picked || (this.state.picked && this.state.picked.english !== this.props.english)) {
                const url = 'http://localhost:8080/users/getcardbyenglish/';
                const english = this.props.english;
                axios.get(url, {
                    params: {
                        userid: '608f0eeb4484a81565857f1a',
                        english: english}
                })
                    .then(response => {
                        this.setState({ picked: response.data });
                    });
            }
        }
    }

    render() {
        let pickedCard = '';
        if (this.state.picked !== null) {
            pickedCard = this.state.picked;
            return (
                    <table className="stackSelectCardTable">
                        <thead><tr><th>Stack: selected card</th></tr></thead>                        
                        <tbody className="selectedCardDetails">
                        <tr><td><img className="selectedCardPicture" src={`data:image/jpeg;base64,${pickedCard.picture.image.data}`}></img></td></tr>
                    <tr><td className="selectedCardEnglish">{pickedCard.english}</td></tr>
                    <tr><td className="selectedCardSpanish"> {pickedCard.spanish}</td></tr>  
                        </tbody>
                </table>
            )
        } else {return (null)}
    }
}
export default SelectedCard;

