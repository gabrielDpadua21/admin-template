'use client'

import Image from "next/image"
import loadingGif from '../../../public/loading.gif';
import useAuthData from "@/data/hook/useAuthData";
import { useRouter } from 'next/navigation';

const PrivateRoutes = (props: any) => {

    const {user, loading} = useAuthData();
    const router = useRouter();

    function renderContent() {
        return (
            <>
                {props.children}
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