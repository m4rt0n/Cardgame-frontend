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
            console.log("SelectedCard: componentDidUpdate")
            if (!this.state.picked || (this.state.picked && this.state.picked.english !== this.props.english)) {
                console.log("SelectedCard: new get request" )
                const url = 'http://localhost:8080/users/getcardbyenglish/';
                const english = this.props.english;
                axios.get(url, {
                    params:{
                        userid: '608f0eeb4484a81565857f1a',
                        english: english
                    }})
                .then(response => {
                   //         console.log(response);
                            this.setState({ picked:  response.data });
                            console.log("SelectedCard: picked state: set")
                        });
        }
    }
}

render(){
    let pickedCard = '';
    if (this.state.picked !== null) {
        pickedCard= this.state.picked;
        console.log('SelectedCard : picked: ' + pickedCard.english)
        return(
            <p>{pickedCard.english}</p>
        )
        if(this.state.picked.english !== this.props.english){
console.log("SelectedCard: new pick: state: ", this.state.picked.english, "new props: ", this.props.english)
        }
    }else{console.log("SelectedCard: picked state: null")}

 //   
    
    /*
    if (this.state.picked) {
        pickedCard =this.state.picked;
        return (    
            <div className="cardContainer">
              <p>render picked</p>
                <td><img className="picture" src={`data:image/jpeg;base64,${pickedCard.picture.image.data}`}></img></td>
            <td className="english">{pickedCard.english}</td>
            <td className="spanish"> {pickedCard.spanish}</td>
                
            </div>              
        );
    }else{
        return(
            <p>cant render picked</p>
        )
    }
*/
return(<p>render</p>) 
    
    
}

}
export default SelectedCard;

