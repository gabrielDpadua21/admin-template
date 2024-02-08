
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
        <div className={`flex flex-col`}>
            <label>{label}</label>
            <input type={type} value={value} onChange={e => changeValue?.(e.target.value)} required={isRequired}/>
        </div>
    )
}

export default AuthInput;