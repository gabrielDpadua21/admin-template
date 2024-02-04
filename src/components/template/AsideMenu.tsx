import { HomeIcon, NotificationIcon, SettingIcons } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";


const AsideMenu = (props: any) => {
    return (
        <aside>
            <div className={`h-20 w-20 bg-gradient-to-r from-indigo-500 to-blue-800 flex flex-col items-center justify-center`}>
                <Logo />
            </div>
            <MenuItem icon={HomeIcon} title="Home" url="/" />
            <MenuItem icon={SettingIcons} title="Settings" url="/settings" />
            <MenuItem icon={NotificationIcon} title="news" url="/news" />
        </aside>
    )
}

export default AsideMenu;