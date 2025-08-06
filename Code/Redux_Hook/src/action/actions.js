import { INCREMENT, DECREMENT } from "./types";
import { FETCH_USER_ERROR, FETCH_USER_SUCCESS, FETCH_USER_REQUEST } from "./types";
import axios from 'axios';

export const increaseCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decreaseCounter = () => {
    return {
        type: DECREMENT
    }
}

// fetch (redux - thunk)
export const fetchAllUsers = () => {
    return async (dispatch, getState) => {
        dispatch(fetchUserRequest());

        try {
            const res = await axios.get("http://localhost:8080/users/all");
            const data = res.data;
            dispatch(fetchUserSuccess(data));
        }
        catch (error) {
            console.log(error);
            dispatch(fetchUserError());
        }
    } 
}

// fetch status
export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = (payload) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload
    }
}

export const fetchUserError = () => {
    return {
        type: FETCH_USER_ERROR
    }
}