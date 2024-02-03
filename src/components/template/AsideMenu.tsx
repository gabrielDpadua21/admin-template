import { HomeIcon, NotificationIcon, SettingIcons } from "../icons";
import MenuItem from "./MenuItem";


const AsideMenu = (props: any) => {
    return (
        <aside>
            <MenuItem icon={HomeIcon} title="Home" url="/" />
            <MenuItem icon={SettingIcons} title="Settings" url="/settings" />
            <MenuItem icon={NotificationIcon} title="news" url="/news" />
        </aside>
    )
}

export default AsideMenu;