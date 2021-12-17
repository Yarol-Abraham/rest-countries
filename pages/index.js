import Layout from '../components/Layout/Layout';
import Search from '../components/Search/Search';
import styles from '../styles/index.module.css';

export default function Home() {
  return (
    <Layout>
        <div className={styles.container}>
          <div className={styles.items}>
            <Search />
            <div>
              2
            </div>
          </div>
        </div>
    </Layout>
  )
}