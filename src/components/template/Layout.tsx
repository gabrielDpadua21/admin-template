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
        <div>
            <AsideMenu />
            <TopBar title={title} subtitle={subtitle} />
            <Content>{children}</Content>
        </div>
    )
}

export default Layout;