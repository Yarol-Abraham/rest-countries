import {
    ALL_COUNTRIES_SUCCESS,
    ALL_COUNTRIES_FAIL,
    GET_COUNTRIE_SUCCESS,
    GET_COUNTRIE_FAIL,
    FILTER_REGION_COUNTRIE_SUCCESS,
    FILTER_REGION_COUNTRIE_FAIL,
    FILTER_COUNTRIE_SUCCESS,
    FILTER_COUNTRIE_FAIL,
    SET_MODE_DARK
} from './countriesTypes';

function countriesReducer(state, action) {
    
    switch (action.type) {
        
        case SET_MODE_DARK:
            localStorage.setItem('dark', action.payload)
            return {
                ...state,
                mode: action.payload
            }

        case FILTER_COUNTRIE_SUCCESS:
        case FILTER_REGION_COUNTRIE_SUCCESS:
        case ALL_COUNTRIES_SUCCESS:
            return{
                ...state,
                countries: action.payload.countries,
                status: action.payload.status
            }
        
        case FILTER_COUNTRIE_FAIL:
        case FILTER_REGION_COUNTRIE_FAIL:
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