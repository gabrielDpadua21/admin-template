import Link from "next/link";


interface MenuItemProps {
    icon: any;
    title: string;
    url?: string;
    classes?: string;
    onClick?: () => void;
}

const MenuItem = (props: MenuItemProps) => {
    const { icon, title, url, onClick, classes } = props;

    const renderLink = () => {
        return (
            <div className={`flex flex-col justify-center items-center w-20 h-20 text-gray-600 hover:text-black dark:text-gray-200 ${classes}`}>
                {icon}
                <span className={`font-primary text-xs font-light`}>{title}</span>
            </div>
        )
    }

    return (
        <div onClick={onClick} className={`flex items-center cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700`}>
            {url ? (
                <Link href={url} className={``}>
                    {renderLink()}
                </Link>
            ) : (
                renderLink()
            )}
        </div>
    )
}

export default MenuItem;