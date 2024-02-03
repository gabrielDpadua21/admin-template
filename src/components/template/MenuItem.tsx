
interface MenuItemProps {
    icon: any;
    title: string;
    url: string;
}

const MenuItem = (props: MenuItemProps) => {
    const { icon, title } = props;
    return (
        <div className={`flex items-center p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}>
            <div>{icon}</div>
        </div>
    )
}

export default MenuItem;