
interface AuthInputProps {
    label: string;
    value: any;
    changeValue?: (value: any) => void;
    type?: 'text' | 'email' | 'password';
    isRequired?: boolean;
    notRendered?: boolean;
}

const AuthInput = (props: AuthInputProps) => {
    const { label, value, changeValue, isRequired, notRendered, type = 'text' } = props;
    
    return ( notRendered ? null : 
        <div className={`flex flex-col w-full`}>
            <label className={`mt-2`}>{label}</label>
            <input 
                className={`px-4 py-3 rounded-md border focus:border-blue-500 focus:outline-none focus:bg-indigo-200 mt-2`}
                type={type} 
                value={value} 
                onChange={e => changeValue?.(e.target.value)} 
                required={isRequired}
            />
        </div>
    )
}

export default AuthInput;