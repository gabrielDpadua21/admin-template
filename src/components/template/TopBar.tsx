import useAppData from "@/data/hook/useAppData";
import ButtonChangeTheme from "./ButtonChangeTheme";
import Title from "./Title";

interface TopBarProps {
    title: string;
    subtitle: string;
}

const TopBar = (props: TopBarProps) => {
  const { title, subtitle } = props;

  const { theme, toggleTheme } = useAppData();

  return (
    <div className={`flex`}>
      <Title title={title} subtitle={subtitle} />
      <div className={`flex flex-grow justify-end`}>
          <ButtonChangeTheme theme={theme} changeTheme={toggleTheme} />
      </div>
    </div>
  );
}

export default TopBar;