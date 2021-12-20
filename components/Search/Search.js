import styles from './search.module.css';

export default function Search({ getForRegion, getForCountry, mode }){

    function handleChangeCountry(country) {
        getForCountry(country);
    }

    function handleChangeRegion(region) {
       getForRegion(region);
    }

    return(
        <div className={styles.search} >
           <div className={`${styles.item} ${mode === 'yes' ? 'bg_dark' : ''}`}>
               <i>
                    <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
               </i>
                <input
                    type='text'
                    name="country"
                    placeholder="Search for a country"
                    className={styles.inputText}
                    onChange={(e)=> handleChangeCountry(e.target.value) }
                />
           </div>
            <select 
                name="filter"
                className={styles.select}
                onChange={(e)=> handleChangeRegion(e.target.value) }
            >
                <option className={styles.option} value=''>Filter by Region</option>
                <option value='Africa'>Africa</option>
                <option value='America'>America</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceania</option>
            </select>
        </div>
    )
}