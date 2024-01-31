import Title from "./Title";

interface TopBarProps {
    title: string;
    subtitle: string;
}

const TopBar = (props: TopBarProps) => {
  const { title, subtitle } = props;
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
    </div>
  );
}

export default TopBar;