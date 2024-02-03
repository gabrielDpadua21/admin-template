
interface ContentProps {
    children?: any;
}

const Content = (props: ContentProps) => {
    return (
        <div className={`flex flex-col mt-7 font-primary`}>
            {props.children}
        </div>
    );
}

export default Content;