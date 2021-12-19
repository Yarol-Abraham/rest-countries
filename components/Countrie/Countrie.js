import { useContext, useEffect } from 'react';

import Link from 'next/link';
import styles from './styles.module.css';
import LoadingIo from '../loading/Loading';

import countriesContext from '../../context/countriesContext';


export default function CountrieName({ name }) {

    const _countriesContext = useContext(countriesContext);
    const { getCountrie, countrie } =  _countriesContext;
    useEffect(()=>{ getCountrie(name); }, []);

    if(Object.keys(countrie).length === 0) return <LoadingIo />
  
    return (
        <>
            <div className={styles.Contaiener_Countrie} >
                <div className={styles.Card} >
                    <div className={styles.item_btn}>
                        <Link href={"/"}>
                            <a className={styles.btn_back} >&larr; Back</a>
                        </Link>
                    </div>

                    <div className={styles.card_body}>
                        
                        <div className={styles.card_imagen}>
                        { /* eslint-disable-next-line @next/next/no-img-element */ }
                            <img
                                src={countrie.flags.svg}
                                alt={countrie.name.common}
                            />
                        </div>

                        <div className={styles.card_content}>
                            <h4 className={styles.card_title}>{countrie.name.common}</h4>
                            <div className={styles.card_data}>

                                <div className={styles.card_paragraph}>
                                    <p><strong>Native Name:</strong>{countrie.name.official}</p>
                                    <p><strong>Population:</strong> {countrie.population}</p>
                                    <p><strong>Region:</strong>{countrie.region}</p>
                                    <p><strong>Sub Region:</strong>{countrie.subregion}</p>
                                    <p><strong>Capital:</strong> {countrie.capital}</p>
                                </div>

                                <div className={styles.card_paragraph_2}>
                                    <p><strong>Top Level Domain:</strong> {countrie.tld}</p>
                                    <p><strong>Currencies:</strong> {countrie.moneda}</p> 
                                    <p><strong>Languages:</strong>
                                    {
                                        Object.values(countrie.languages).map(el => (
                                             <span key={el} >{el}</span>
                                        ))
                                    }
                                    </p>
                                </div>

                            </div>
                            
                            <div className={styles.card_border}>
                                <h5 className={styles.card_subtitle}>Border Countries:</h5>
                                <div className={styles.card_languages}>
                                   {
                                       countrie.borders ?
                                        countrie.borders.map(el=> (
                                            <p key={el} className={styles.card_subparagraph} >{el}</p>
                                        ))
                                       : <p className={styles.card_subparagraph}>no borders</p>
                                   }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}