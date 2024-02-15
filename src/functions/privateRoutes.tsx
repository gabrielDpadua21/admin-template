'use client'

import Image from "next/image"
import Head from "next/head";
import loadingGif from '../../public/loading.gif';
import useAuthData from "@/data/hook/useAuthData";
import { useRouter } from 'next/navigation';

const PrivateRoutes = (jsx: any) => {

    const {user, loading} = useAuthData();
    const router = useRouter();

    function renderContent() {
        return (
            <>
                <Head>
                    <script>
                        {`
                            if(!document.cookie?.includes('admin-template')) {
                                window.location.href = "/auth"
                            }
                        `}
                    </script>
                </Head>
                {jsx}
            </>
        )
    }

    function renderLoading() {
        return (
           <div className={`flex justify-center items-center h-screen`}>
                <Image src={loadingGif} alt="Loading..."/>
           </div>
        )
    }

    console.log(user);

    if (loading) return renderLoading()
    if (!loading && user?.email) return renderContent()
    router.push('/auth')
    return null
}

export default PrivateRoutes;