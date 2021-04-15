import axios from "axios";
import { Component } from "react";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import './List.css';

class List extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        axios.get('http://localhost:8081/cards/getall/').then(response => {
            this.setState({
                items: response.data,
            });
            console.log(response)
        }
        );
    }
    clickEvent = (x) => {
        console.log('clicked: ', x);

    }
    editEvent = (x) => {
        console.log('edit: ', x);

    }
    deleteEvent = (x) => {
        console.log('delete: ', x);

    }

    render() {
        const cards = this.state.items;
        const list = cards.map(card => {
            return <tr key={card.id}>
                <td>{card.english}</td>
                <td>{card.spanish} </td>
                <td>{card.picture.title}</td>
                <td>
                    <ButtonGroup>
                        <Button onClick={() => this.editEvent(card.english)}>E</Button>
                        <Button onClick={() => this.deleteEvent(card.english)}>D</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div className="list">
                <Container fluid>
                <p>List:</p>
                <Table className="table">
                    <thead>
                        <tr>
                            <th width="20%">English</th>
                            <th width="20%">Spanish</th>
                            <th width="10%">Picture</th>
                            <th width="10%">Buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </Table>
                </Container>
            </div>
        )



    }


};
export default List