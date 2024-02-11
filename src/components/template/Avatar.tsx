'use client';

import useAuthData from "@/data/hook/useAuthData";
import Link from "next/link";

interface AvatarProps {
    class?: string
}

const Avatar = (props: AvatarProps) => {

    const { user } = useAuthData();

    return (
        <div>
            <Link href="/profile">
                <img 
                    src={ user?.imageUrl ? user.imageUrl : 'https://source.unsplash.com/random'} 
                    alt="Avatar"
                    className={`w-12 h-12 rounded-full cursor-pointer ${props.class}`} 
                />
            </Link>
        </div>
    )
}

export default Avatar;