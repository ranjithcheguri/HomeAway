//states of individual comoponents go here.
import { OWNER_SUBMIT_LOGIN, OWNER_SIGNOUT } from '../actions/types';

const initialState = {
    redirectVar: false,
    response: ""
};

export default function (state = initialState, action) {
    switch (action.type) {
        case OWNER_SUBMIT_LOGIN:
            if (action.payload === 200) {
                console.log("Reducer : login successful !");
                return {
                    ...state,
                    redirectVar: true,
                    response: action.payload
                }
            } else {
                console.log("Reducer : login Failed !");
                return {
                    ...state,
                    redirectVar: false,
                    response: action.payload
                }
            }

        case OWNER_SIGNOUT:
            console.log("Reducer : Owner Signout successful !",action.payload);
            return {
                ...state,
                response: "",
                redirectVar: action.payload
            }
        default:
            return state;
    }
}