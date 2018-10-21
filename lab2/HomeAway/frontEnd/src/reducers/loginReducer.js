//states of individual comoponents go here.
import { SUBMIT_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, TRAVELER_SIGNOUT } from '../actions/types';

const initialState = {
  redirectVar: false,
  response: ""
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBMIT_LOGIN:
      if (action.payload === 200) {
        console.log("Reducer : Traveler login successful !");
        return {
          ...state,
          redirectVar: true,
          response: action.payload
        }
      } else {
        console.log("Reducer : Traveler login Failed !");
        return {
          ...state,
          redirectVar: false,
          response: action.payload
        }
      }

    case TRAVELER_SIGNOUT:
      console.log("Reducer : Traveler Signout successful !");
      return {
        ...state,
        response: "",
        redirectVar: action.payload
      }
    default:
      return state;
  }
}