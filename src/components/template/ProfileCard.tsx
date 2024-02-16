'use client';

import useAuthData from "@/data/hook/useAuthData";


const ProfileCard = (props: any) => {

    const { user } = useAuthData();

    return (
        <div className={'min-w-80 p-10 bg-white rounded-lg flex flex-col items-center'}>
            <h2 className={`font-black`}>Profile</h2>
            <div className={`w-300 h-300 rounded-full my-10`}>
                <img 
                    className={`rounded-full w-300 h-300 object-cover border-4 border-indigo-600`}
                    src={ user?.imageUrl ? user.imageUrl : 'https://source.unsplash.com/random'}  
                    alt="Avatar"
                />
            </div>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default ProfileCard;