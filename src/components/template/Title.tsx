
interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = (props: TitleProps) => {
    
    const { title, subtitle } = props;

    return (
        <div>
            <h1 className={`font-primary`}>{title}</h1>
            <h2 className={`font-primary`}>{subtitle}</h2>
        </div>
    )
}

export default Title;