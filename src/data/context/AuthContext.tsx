'use client';

import User from '@/model/User';
import firebase from '../../firebase/config'
import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

async function userFromFirebase(userFirebase: firebase.User): Promise<User> {
     const token = await userFirebase.getIdToken();

    return {
        uuid: userFirebase.uid,
        email: userFirebase.email,
        name: userFirebase.displayName,
        token,
        provider: userFirebase?.providerData[0]?.providerId,
        imageUrl: userFirebase.photoURL,
    }
}

interface AuthContextProps {
    user?: User,
    loginGoogle?: () => Promise<void>,
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
    const router = useRouter();

    const [user, setUser] = useState<User>();

    const loginGoogle = async () => {
        console.log("loginGoogle");
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{user, loginGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
