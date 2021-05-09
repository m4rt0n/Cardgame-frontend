
import { Component } from "react";
import './User.css';
import Stack from './Stack';

class User extends Component {
    state = {
        data: null
    }

    handleCallback = (childData) => {
        this.setState({ data: childData })
        console.log("handleCallback")
    }

    render() {
        if (this.props) {
            let user = this.props.user;
            return (
                <div className="user">
                    <div className="userDetails">
                        <p className="username">username: {user.username}</p>
                        <p className="id">id: {user.id}</p>
                        <p className="password">password: {user.password}</p>
                        <p className="email">email: {user.email}</p>
                    </div>
                    <div className="stack">
                        <Stack stack={user.stack}
                            userid={user.id}
                            parentCallback={this.handleCallback}
                        />
                    </div>
                </div>
            )
        } else {
            console.log("user undefined")
            return (null)
        }

    }
}

export default User;