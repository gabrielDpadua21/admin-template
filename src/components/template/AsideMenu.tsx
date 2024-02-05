'use client'

import { HomeIcon, LogoutIcon, NotificationIcon, SettingIcons } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


const AsideMenu = (props: any) => {
    return (
        <aside className={`flex flex-col dark:bg-gray-900 dark:text-gray-200 bg-gray-200 text-gray-900`}>
            <div className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-blue-800 flex flex-col items-center justify-center`}>
                <Logo />
            </div>
            <div className={`flex-grow`}>
                <MenuItem icon={HomeIcon} title="Home" url="/" />
                <MenuItem icon={SettingIcons} title="Settings" url="/settings" />
                <MenuItem icon={NotificationIcon} title="news" url="/news" />
            </div>
            <div className={``}>
                <MenuItem icon={LogoutIcon} title="Exit" onClick={() => console.log('Good Bye!!!')} classes={`text-red-600 dark:text-red-800 dark:hover:bg-gray-200 dark:hover:text-red-400 hover:bg-red-400 hover:text-white`}></MenuItem>
            </div>
        </aside>
    )
}

export default AsideMenu;