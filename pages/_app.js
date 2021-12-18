import '../styles/globals.css';
import CountriesAction from '../context/countriesAction';

function MyApp({ Component, pageProps }) {
  return (
    <CountriesAction>
      <Component {...pageProps} />
    </CountriesAction>
  )
}

export default MyApp
