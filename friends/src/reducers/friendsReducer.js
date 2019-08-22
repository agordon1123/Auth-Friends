import {
    FETCH_FRIENDS_START,
    FETCH_FRIENDS_SUCCESS,
    ERROR
} from '../actions/getFriends';

const initialState = {
    error: '',
    isLoading: false,
    friends: []
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                error: '',
                isLoading: true
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                friends: action.payload
            };
        case ERROR:
            return {
                ...state,
                error: 'Server error'
            };
        default:
            return state;
    }
};
