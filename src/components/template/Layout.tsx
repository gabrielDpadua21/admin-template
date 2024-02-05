import AsideMenu from "./AsideMenu";
import Content from "./Content";
import TopBar from "./TopBar";

interface LayoutProps {
    title: string;
    subtitle: string;
    children?: any;
}

const Layout = (props: LayoutProps) => {
    const { title, subtitle, children } = props;
    return (
        <div className={`flex h-screen w-screen dark`}>
            <AsideMenu />
            <div className={`flex flex-col bg-gray-300 w-full p-7 dark:bg-gray-800`}>
                <TopBar title={title} subtitle={subtitle} />
                <Content>{children}</Content>
            </div>
        </div>
    )
}

export default Layout;