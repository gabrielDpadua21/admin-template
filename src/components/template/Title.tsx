
interface TitleProps {
    title: string;
    subtitle: string;
}

const Title = (props: TitleProps) => {
    
    const { title, subtitle } = props;

    return (
        <div>
            <h1 className={`font-primary font-black text-3xl text-gray-900`}>{title}</h1>
            <h2 className={`font-primary font-light text-sm text-gray-600`}>{subtitle}</h2>
        </div>
    )
}

export default Title;