
interface ContentProps {
    children?: any;
}

const Content = (props: ContentProps) => {
    return (
        <div className={`flex flex-col mt-7 font-primary text-gray-800 dark:text-gray-500`}>
            {props.children}
        </div>
    );
}

export default Content;