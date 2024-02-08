'use client'

import AuthInput from "@/components/auth/AuthInput";
import { useState } from "react";
import "@/styles/globals.css";
import { WarningIcon } from "@/components/icons";


const Auth = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [mode, setMode] = useState<'login' | 'register' | 'forgotPassword'>('login');
    const [erro, setErro] = useState('');

    const send = () => {
        console.log('send');
        showError('Erro ao fazer login')
    }

    const showError = (message: string, time = 5) => {
        setErro(message);
        setTimeout(() => {
            setErro('');
        }, time * 1000);
    }

    return (
        <div className={`w-screen h-screen flex items-center justify-center p-2 bg-cover bg-[url('https://source.unsplash.com/random')]`}>
            <div className={`bg-gray-100 p-10 content-center rounded-md flex flex-col items-center w-screen md:w-1/3`}>
                <h1 className={`text-xl font-bold mb-5`}>
                    {mode === 'login' ? 'Faça Login na sua conta' : 'Cadastre-se na Plataforma'}
                </h1>

                {erro && (
                    <div className={`bg-red-400 text-white py-3 px-5 my-2 border border-red-700 flex items-center w-full rounded-lg`}>
                        {WarningIcon}
                        <span className={`ml-3`}>{erro}</span>
                    </div>
                )}

                <AuthInput label="E-mail" type="email" value={mail} changeValue={setMail} isRequired />
                <AuthInput label="Password" type="password" value={password} changeValue={setPassword} isRequired />
                <AuthInput 
                    label="ConfirmPassword"
                    type="password" 
                    value={confirmPassword} 
                    changeValue={setConfirmPassword} 
                    isRequired notRendered={mode == 'login'}
                />
                <button className={`bg-indigo-600 hover:bg-indigo-300 px-4 py-3 rounded-md text-white w-full mt-5`} onClick={send}>
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>
                <hr className={`my-2 w-full`} />
                <button className={`bg-red-600 hover:bg-red-300 px-4 py-3 rounded-md text-white w-full `} onClick={send}>
                    Google Login
                </button>

                <p className={`mt-8`}>
                    <a onClick={() => setMode( mode === 'login' ? 'register' : 'login')} className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}>
                        {mode === 'login' ? 'Não tem cadastro? Criar uma conta' : 'Já tenho uma conta! Fazer Login'}
                    </a>
                </p>

            </div>
        </div>
    )
}

export default Auth;