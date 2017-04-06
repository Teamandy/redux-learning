import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/userActions';

import UsersList from './UsersList';

@connect((store) => {
    return {
        users: store.users.users
    }
})

class Layout extends React.Component {
    componentWillMount() {
        console.log(this.props);
        this.props.dispatch(fetchUsers());
    }
    render() {
        return (
            <div>
                User's list:
                <UsersList users={this.props.users} />
            </div>
        );
    }
}

export default Layout;