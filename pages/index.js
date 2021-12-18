import styles from '../styles/index.module.css';

import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import Countries from '../components/Countries/Countries';

export default function Home() {
  return (
    <Layout>
        <div className={styles.container}>
          <div className={styles.items}>
            <Search />
          </div>
          <Countries />
        </div>
    </Layout>
  )
}