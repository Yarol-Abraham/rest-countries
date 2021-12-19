import Layout from '../../components/Layout/Layout';
import CountrieName from '../../components/Countrie/Countrie';
import LoadingIo from '../../components/loading/Loading';

import { useRouter } from 'next/router';

export default function Countrie(){

    let router = useRouter();
    const { name } = router.query;
    
    if(!name) return <LoadingIo />
    
    return(
        <Layout>
           <CountrieName name={name} />
        </Layout>
    )

}