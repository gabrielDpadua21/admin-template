'use client';

import User from '@/model/User';
import firebase from '../../firebase/config'
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookeis from 'js-cookie';

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

function managementCookie(isLogged: boolean) {
    if (isLogged) {
        Cookeis.set('admin-template', isLogged.toString(), {expires: 7});        
    } else {
        Cookeis.remove('admin-template');
    }
}

interface AuthContextProps {
    user?: User | null,
    loginGoogle?: () => Promise<void>,
    logout?: () => Promise<void>,
    loading?: boolean
}

const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props: any) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User | null>();

    const configSession = async (userFirebase: firebase.User | null) => {
        if(userFirebase?.email) {
            const user = await userFromFirebase(userFirebase);
            setUser(user);
            managementCookie(true);
            setLoading(false);
            return user.email;
        }

        setUser(null);
        managementCookie(false);
        setLoading(false);
        return false;
    }

    const loginGoogle = async () => {
        try {
            setLoading(true);
            const resp = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
            await configSession(resp.user);
            router.push('/');
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await firebase.auth().signOut();
            await configSession(null);
            router.push('/auth');
        } finally {
            setLoading(false);
        }
        
    }

    useEffect(() => {
        if (Cookeis.get('admin-tamplate')) {
            const cancel = firebase.auth().onIdTokenChanged(configSession);
            return () => cancel();
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, loginGoogle, logout, loading}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
