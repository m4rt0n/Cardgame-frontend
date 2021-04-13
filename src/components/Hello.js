import axios from "axios";
import { Component } from "react";
import './hello.css';

class Hello extends Component{
    state={
        message:''
    };

textEvent=(event)=>{
    this.setState({message: event.target.value})
    console.log(this.state.message);
};

buttonEvent=()=>{
    axios.get('http://localhost:8081/cards/hello')
    .then(response=>{
this.setState(
    {message:response.data}  
    
);
console.log(response)

    });
    
};

render(){
    return(
     <div className="hello"   >
         <button  onClick={() => this.buttonEvent()}>H</button>  
         <p> " {this.state.message} "</p>
     </div>
    )
}
}
export default Hello;