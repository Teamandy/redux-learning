import axios from 'axios';

function fetchUsers() {
    return (disp) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                disp({ type: 'FETCH_USERS_RECIEVED', payload: response.data });
            })
            .catch((err) => {
                disp({ type: 'FETCH_USERS_REJECTED', payload: err });
            })
    }
}

export {fetchUsers};