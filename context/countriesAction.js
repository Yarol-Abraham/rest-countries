import { useReducer } from 'react';

import createAxios from '../config/createAxios';

import countriesContext from './countriesContext';
import countriesReducer from './countriesReducer';

import {
    ALL_COUNTRIES_SUCCESS,
    ALL_COUNTRIES_FAIL,
    GET_COUNTRIE_SUCCESS,
    GET_COUNTRIE_FAIL
} from './countriesTypes';

function CountriesAction(props) {
    
    const initialState = {
        countries: [],
        countrie: {},
        status: ''
      }
    
    const [state, dispatch] = useReducer(countriesReducer, initialState);

     async function getAllCountries()
     {
        try {
            const response = await createAxios.get('/all');
            dispatch({
                type: ALL_COUNTRIES_SUCCESS,
                payload: {
                    countries: response.data,
                    status: 'success'
                }
            });
        } catch (error) {
            dispatch({
                type: ALL_COUNTRIES_FAIL,
                payload:{
                    countries: [],
                    status: 'fail'
                }
            })
        }
    }
    
    async function getCountrie(name = 'Guatemala') {
        try {
            const response = await createAxios.get(`/name/${name}`); 
            const data = { ...response.data[0] };
            data.moneda = "";
            Object.values(data.currencies).map(el=>{
                if(data.moneda === "") data.moneda = el.name;
             })
            dispatch({
                type: GET_COUNTRIE_SUCCESS,
                payload:{
                    countrie: data,
                    status: 'success'
                }
            })
        } catch (error) {
            dispatch({
                type: GET_COUNTRIE_FAIL,
                payload:{
                    countrie: {},
                    status: 'fail'
                }
            })
        }
    }

    return (
        <countriesContext.Provider
            value={{
                countries: state.countries,
                countrie: state.countrie,
                status: state.status,
                getAllCountries,
                getCountrie
            }}
        >
            {props.children}
        </countriesContext.Provider>
    )
}

export default CountriesAction;