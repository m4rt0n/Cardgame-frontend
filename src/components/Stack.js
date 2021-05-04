import axios from "axios";
import { Component } from "react";
import './Stack.css';
import Card from './Card';


class Stack extends Component {
    constructor(props){
        super(props);
      }
    

    
    buttonEvent = (x) => {
        console.log('props: ', x);
    }
    editEvent = (x) => {
        console.log('edit: ', x);

    }
    deleteEvent = (x) => {
        console.log('delete: ', x);

    }
    addEvent = () => {
        console.log('add');
    }
    render() {
    if (this.props) {   
        console.log('props: ',this.props)

        const stack = this.props.stack;   
      //     const data = Array.from(stack); 
        const list = stack.map(card => {
          return( 
          <div className="cardList">
              <Card key={card.english} 
          english={card.english}
          spanish={card.spanish}
          picture={card.picture} 
                  
       />
       </div>)
        
         
         
        });
        /*
        if (!Array.isArray(data) || !data.length) {
            console.log('data array is empty')
        }
*/
        if(this.props.stack){
            console.log('stack: ',this.props.stack)
        }else{
            console.log('no stack')
        }

        return (
            <div className="container">
                <table className="table">
                    <thead >
                        <tr >
                            <th width="10%" >Picture</th>
                            <th width="20%">English</th>
                            <th width="20%">Spanish</th>
                            <th width="10%">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
         {list}
         </tbody>
                </table>  
                        
            </div>   
        );
        }else{console.log("no props")}
    };
};




export default Stack;