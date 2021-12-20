import { useReducer } from 'react';

import createAxios from '../config/createAxios';

import countriesContext from './countriesContext';
import countriesReducer from './countriesReducer';

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

function CountriesAction(props) {
    
    const initialState = {
        countries: [],
        countrie: {},
        status: '',
        mode: typeof window !== 'undefined' ? localStorage.getItem('dark') : ''
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
    
    async function getCountrie(name = 'Guatemala') 
    {
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

    async function getForRegion(region) 
    {
        try {
            let url = "/all";
            if(region) url = `/region/${region}`;
            const response = await createAxios.get(url);
            dispatch({
                type: FILTER_REGION_COUNTRIE_SUCCESS,
                payload: {
                    countries: response.data,
                    status: 'success'
                }
            })
        } catch (error) {
            dispatch({
                type: FILTER_REGION_COUNTRIE_FAIL,
                payload:{
                    countries: [],
                    status: 'fail'
                }
            })
        }
    }

    async function getForCountry(name) 
    {
        try {
            let url = "/all";
            if(name) url = `/name/${name}`;
            const response = await createAxios.get(url); 
            dispatch({
                type: FILTER_COUNTRIE_SUCCESS,
                payload: {
                    countries: response.data,
                    status: 'success'
                }
            })
        } catch (error) {
            dispatch({
                type: FILTER_COUNTRIE_FAIL,
                payload:{
                    countries: [],
                    status: 'fail'
                }
            })
        }
    }

    function setMode(mode) {
      let getMode = mode === 'yes' ? 'no' : 'yes';
        dispatch({
            type: SET_MODE_DARK,
            payload: getMode
        })
    }

    return (
        <countriesContext.Provider
            value={{
                countries: state.countries,
                countrie: state.countrie,
                status: state.status,
                mode: state.mode,
                getAllCountries,
                getCountrie,
                getForRegion,
                getForCountry,
                setMode
            }}
        >
            {props.children}
        </countriesContext.Provider>
    )
}

export default CountriesAction;