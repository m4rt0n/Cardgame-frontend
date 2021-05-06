import axios from "axios";
import { Component } from "react";
import './SelectedCard.css';
import './Stack';

class SelectedCard extends Component {
    state = { 
        picked: [] 
    }


    componentDidUpdate() {
        if (this.props.english) {
            if (!this.state.picked || (this.state.picked && this.state.picked.english !== this.props.english)) {
                const url = 'http://localhost:8080/users/getcardbyenglish/';
                const english = this.props.english;
                axios.get(url, {
                    params:{
                        userid: '608f0eeb4484a81565857f1a',
                        english: english
                    }})
                .then(response => {
                   //         console.log(response);
                            this.setState({ picked: + response.data });
                        });
        }
    }
}

render(){
    let pickedCard = '';
    if (this.state.picked) {
        pickedCard = this.state.picked;
    }

    return (
        <p>selectedCard: </p>
    );
}

}
export default SelectedCard;

