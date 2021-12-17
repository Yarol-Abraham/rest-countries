import Head from 'next/head'

import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }){

    return(
    <>
        <Head>
            <title>REST countries</title>
            <meta name="REST countries" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main>
            {children}
        </main>

        <Footer />
    </>
    )
}