'use client';

import { MonIcon, SunIcon } from "../icons";

interface ButtonChangeThemeProps {
    theme?: string;
    changeTheme?: () => void;
}

const ButtonChangeTheme = (props: ButtonChangeThemeProps) => {

    const { theme, changeTheme } = props;

    return theme === 'dark' ? (
        <div onClick={changeTheme} className={`btn-change-theme bg-gradient-to-r from-yellow-300 to-yellow-600`}>
            <div className={`icon-change-theme bg-white text-yellow-600`}>
                {SunIcon('w-4 h-4')}
            </div>
            <div className={`text-change-theme text-white`}>
                <span>Light</span>
            </div>
        </div>
    ) : (
        <div onClick={changeTheme} className={`btn-change-theme bg-gradient-to-r from-gray-600 to-gray-900`}>
            <div className={'text-change-theme mr-5 ml-1 text-gray-300'}>
                <span>Dark</span>
            </div>
            <div className={`icon-change-theme bg-black text-yellow-300`}>
                {MonIcon('w-4 h-4')}
            </div>
        </div>
    )
}

export default ButtonChangeTheme;