import { useContext } from "react";

import { useRouter } from "next/router";

import styles from './countries.module.css';

import countriesContext from '../../context/countriesContext';

export default function Countries({ countries }){
  
    let router = useRouter();

    const _countriesContext = useContext(countriesContext);
    const { mode } =  _countriesContext;

    const handleClick = function(name) { router.push(`/countries/${name}`); } 

    return(
        <div className={styles.countries}>
           {
                countries.map(el => (
                    <div key={el.name.common} className={`${styles.card} ${mode === 'yes' ? 'bg_dark' : ''}`}>
                        <div 
                            className={styles.imagen}
                            onClick={()=> handleClick(el.name.common)}
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
                ))
            }
        </div>
    )
}