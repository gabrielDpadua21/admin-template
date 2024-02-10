'use client';

import User from '@/model/User';
import firebase from '../../firebase/config'
import { createContext, useState } from 'react';
import { useRouter } from 'next/navigation';

async function userFromFirebase(userFirebase: firebase.User | null): Promise<User> {
    if (userFirebase === null) throw new Error('Usuário não está logado');

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
        const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
        setUser(await userFromFirebase(resp.user));
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{user, loginGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
