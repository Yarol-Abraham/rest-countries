import { useContext, useEffect } from "react";

import styles from '../styles/index.module.css';

import Layout from '../components/Layout/Layout';
import LoadingIo from '../components/loading/Loading';
import Search from '../components/Search/Search';
import Countries from '../components/Countries/Countries';

import countriesContext from '../context/countriesContext';

export default function Home() {

  const _countriesContext = useContext(countriesContext);
  const { getAllCountries, countries, status } =  _countriesContext;
  useEffect(()=>{ getAllCountries(); }, []);

  if(countries.length === 0 && status === '') return <LoadingIo />

  return (
    <Layout>
        <div className={styles.container}>
          <div className={styles.items}>
            <Search />
          </div>
          {
            status === 'success' ? (
              <Countries countries={countries} />
            ) : <p>Error..</p>
          }
        </div>
    </Layout>
  )
}