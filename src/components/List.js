import axios from "axios";
import { Component } from "react";
import './List.css';

class List extends Component{
state={
   items: [],
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

render(){
    return(<div className = "list"> 
    <p >My List: </p>
        {this.state.items.map((item, index)=>(
            <p key={index}> Eng: {item.english} / Spanish: {item.spanish} / Picture: {item.picture.title}</p>
        ))}</div>)
}

};
export default List