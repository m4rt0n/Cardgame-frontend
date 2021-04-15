import axios from "axios";
import { Component } from "react";
import './List.css';

class List extends Component{
state={
   items: [],
   showDetails: false,
};

componentDidMount(){
    axios.get('http://localhost:8081/cards/getall/').then(response=>{
        this.setState({
            items: response.data,
        });
console.log(response)
        }
    );
}




    clickEvent=(x)=>{  
console.log('clicked: ',x );

    }

render(){
    const {showDetails} = this.state;
    return(
        <div className = "list">
    <p>List: </p>
        {this.state.items.map((item, index)=>(
            <ul  className = "card" 
            onClick={()=>this.clickEvent(item.english)}
             key={index}> Eng: {item.english}  Spanish: {item.spanish}  Picture: {item.picture.title}</ul>
        ))}

<div className="details">
    <p>Details: </p>
            <button onClick={() => this.setState({ showDetails: !showDetails })}>toggle</button>
            <div style={{ display: (showDetails ? 'block' : 'none') }}>This is visible</div>
            </div>

        </div>
        
        
        )

        }

};
export default List