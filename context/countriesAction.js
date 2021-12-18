import { useReducer } from 'react';

import createAxios from '../config/createAxios';

import countriesContext from './countriesContext';
import countriesReducer from './countriesReducer';

import {
    ALL_COUNTRIES_SUCCESS
} from './countriesTypes';

function CountriesAction(props) {
    
    const initialState = {
        countries: [],
        countrie: {},
        status: false
      }
    
    const [state, dispatch] = useReducer(countriesReducer, initialState);

    const getAllCountries = async()=>{
            try {
                const response = await createAxios.get('/all');
                dispatch({
                    type: ALL_COUNTRIES_SUCCESS,
                    payload: {
                        countries: response.data,
                        status: true,
                    }
                });
            } catch (error) {
                console.log(error);
            }
    }

    return (
        <countriesContext.Provider
            value={{
                countries: state.countries,
                countrie: state.countrie,
                status: state.status,
                getAllCountries
            }}
        >
            {props.children}
        </countriesContext.Provider>
    )
}

export default CountriesAction;