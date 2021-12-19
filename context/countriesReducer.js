import {
    ALL_COUNTRIES_SUCCESS,
    ALL_COUNTRIES_FAIL,
    GET_COUNTRIE_SUCCESS,
    GET_COUNTRIE_FAIL
} from './countriesTypes';

function countriesReducer(state, action) {
    
    switch (action.type) {
        
        case ALL_COUNTRIES_SUCCESS:
            return{
                ...state,
                countries: action.payload.countries,
                status: action.payload.status
            }

        case ALL_COUNTRIES_FAIL:
            return {
                ...state,
                countries: action.payload.countries,
                status: action.payload.status
            }
        
        case GET_COUNTRIE_SUCCESS:
            return {
                ...state,
                countrie: action.payload.countrie,
                status: action.payload.status
            }
        
        case GET_COUNTRIE_FAIL:
            return {
                ...state,
                countrie: action.payload.countrie,
                status: action.payload.status
            }

        default:
            return state;
    }

}

export default countriesReducer;