const initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: null
};
const users = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_USERS_START':{
            return {...state, fetching: true};
        }        
        case 'FETCH_USERS_RECIEVED':{
            return {...state, fetching: false, fetched: true, users: action.payload};
        }
        case 'FETCH_USERS_REJECTED':{
            return {...state, fetching: false, error: action.payload};
        }
    }
    return state;
};

export default users;