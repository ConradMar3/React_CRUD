import { Table } from 'react-bootstrap';
import React, { Component } from 'react';
import * as firebase from 'firebase';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        firebase.database().ref('/')
            .on('value', snapshot => {
                let returnArr = [];
                snapshot.forEach(data => {
                    var user = data.val();
                    user['key'] = data.key;
                    returnArr.push(user);
                });
                this.setState({
                    users: returnArr
                })
            });
    }
    render() {
        return (
            <div>
            </div>
        );
    }
}
export default User;