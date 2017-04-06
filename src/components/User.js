import React from 'react';

class User extends React.Component{
    render(){
        const { user } = this.props;
        return (
            <li>
                {user.name} - {user.email}
            </li>
            
        );
    }
}
export default User;