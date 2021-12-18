import { useContext, useEffect } from "react";

import styles from './countries.module.css';

import countriesContext from '../../context/countriesContext';

export default function Countries(){
    
   const _countriesContext = useContext(countriesContext);
   const { getAllCountries, countries } =  _countriesContext;

    useEffect(()=>{ getAllCountries(); }, [])
    console.log(countries);
    const handleClick = function() {
        console.log('click');
    } 

    return(
        <div className={styles.countries}>
           {
               countries.length > 0 ? (
                countries.map(el => (
                    <>
                    <div key={el.name.common} className={styles.card}>
                        <div 
                            className={styles.imagen}
                            onClick={handleClick}
                        >
                          { /* eslint-disable-next-line @next/next/no-img-element */ }
                           <img 
                                src={el.flags.png}
                                alt="imagen de prueba"
                           />
                        </div>
                        <div className={styles.content}>
                            <h4 className={styles.title}>{el.name.common}</h4>
                            <p className={styles.paragraph} ><strong>Population: </strong> {el.population} </p>
                            <p className={styles.paragraph} ><strong>Region: </strong> {el.region} </p>
                            <p className={styles.paragraph}><strong>Capital: </strong> {el.capital} </p>
                        </div>
                    </div>
                    </>
                ))
               ) : <p>Cargando...</p>
                }
        </div>
    )
}