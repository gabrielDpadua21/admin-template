'use client'

import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";
import "@/styles/globals.css";


const Auth = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mode, setMode] = useState<'login' | 'register' | 'forgotPassword'>('login');

    return (
        <div className={`flex flex-col`}>
            <h1>Auth</h1>
            <AuthInput label="E-mail" type="email" value={mail} changeValue={setMail} isRequired />
            <AuthInput label="Password" type="password" value={password} changeValue={setPassword} isRequired />
            <AuthInput 
                label="ConfirmPassword"
                type="password" 
                value={confirmPassword} 
                changeValue={setConfirmPassword} 
                isRequired notRendered={mode == 'login'}
            />
        </div>
    )
}

export default Auth;