// All Login actions should be done, variables must be imported from types.js
import { LOGIN_SUCCESS, LOGIN_ERROR, SUBMIT_LOGIN, TRAVELER_SIGNOUT } from './types';
import axios from "axios";

//const ROOT_URL = "http://localhost:3001";

export const submitLogin = (email, password) => dispatch => {
    //code here
    console.log("Actions : verfying  Traveler login...");
    axios.defaults.withCredentials = true;
    const data = {
        email: email,
        password: password
    }
    console.log(data);

    /********************TRAVELER LOGIN **************************/
    axios.post('http://localhost:3001/login', data)
        .then(response => {
            dispatch({
                type: SUBMIT_LOGIN,
                payload: response.status
            })
        })
        .catch((error) => {
            console.log("Action Catch : ", error.response.status);
            dispatch({
                //ERROR 400 status
                type: SUBMIT_LOGIN,
                payload: error.response.status
            })
        })

}

export const travelerSignout = () => dispatch => {
    console.log("Actions : signing out traveler...");
    dispatch({
        type: TRAVELER_SIGNOUT,
        payload: false
    })
} 
