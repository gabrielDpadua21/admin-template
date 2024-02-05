
interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = (props: TitleProps) => {
    
    const { title, subtitle } = props;

    return (
        <div>
            <h1 className={`font-primary font-black text-3xl text-gray-900 dark:text-gray-100`}>{title}</h1>
            <h2 className={`font-primary font-light text-sm text-gray-600 dark:text-gray-400`}>{subtitle}</h2>
        </div>
    )
}

export default Title;