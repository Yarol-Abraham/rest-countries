import { useEffect } from 'react';

import { useRouter } from 'next/router';
import Head from 'next/head';

import Header from './Header';

export default function Layout({ children }){

    let router = useRouter();

    useEffect(()=>{
        if(router.pathname === "/"){
            document.querySelector('body').style.background = "#F5F5F5"; 
        }else{
            document.querySelector('body').style.background = "#FFF";
        }
    }, [router])

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

    </>
    )
}