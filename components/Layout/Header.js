import { useContext } from 'react';
import styles from './layout.module.css';

import countriesContext from '../../context/countriesContext';

export default function Header(){

    const _countriesContext = useContext(countriesContext);
    const { setMode, mode } =  _countriesContext;

    const handleCLick = function(){ setMode(mode); }

    return(
        <header className={`${styles.header} ${ mode === 'yes' ? 'bg_dark' : ''}`} >
           <div className={styles.container}>
            <h1 className={styles.title}>Where in the world?</h1>
            <button
                type="button"
                onClick={handleCLick}
                className={styles.btn_dark}
            >
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Dark Mode
                </button>
           </div>
        </header>
    )
}