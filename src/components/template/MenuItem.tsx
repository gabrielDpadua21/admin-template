import Link from "next/link";


interface MenuItemProps {
    icon: any;
    title: string;
    url: string;
}

const MenuItem = (props: MenuItemProps) => {
    const { icon, title, url } = props;
    return (
        <div className={`flex items-center p-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700`}>
            <Link href={url} className={`flex flex-col justify-center items-center w-20 h-20`}>
                {icon}
                <span className={`font-primary text-xs font-light text-gray-600`}>{title}</span>
            </Link>
        </div>
    )
}

export default MenuItem;