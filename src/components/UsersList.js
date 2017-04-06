import React from 'react';
import User from './User';

class UsersList extends React.Component{
    render(){
        const { users } = this.props;
        const usersList = users.map((user) => {
            return <User user = {user} key = {user.id}/>;
        });
        return (
            <ul>
                {usersList}
            </ul>
        );
    }
}

export default UsersList;