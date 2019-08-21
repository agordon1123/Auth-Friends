import { axiosWithAuth } from '../utilities/axiosWithAuth';

export const FETCH_FRIENDS_START = 'FETCH_FRIENDS_START';
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: FETCH_FRIENDS_START })
        axiosWithAuth()
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res)
            // setFriends({ friends: res.data })
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data })
        })
        .catch(err => console.log(err))
        dispatch({ type: ERROR })
    }
}
