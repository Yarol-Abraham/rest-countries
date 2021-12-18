import {
    ALL_COUNTRIES_SUCCESS,
    ALL_COUNTRIES_FAIL
} from './countriesTypes';

function countriesReducer(state, action) {
    
    switch (action.type) {
        case ALL_COUNTRIES_SUCCESS:
            return{
                ...state,
                countries: action.payload.countries,
                status: action.payload.status

            }
        default:
            return state;
    }

}

export default countriesReducer;