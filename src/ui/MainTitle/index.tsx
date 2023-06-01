import "./style/index.scss";

interface MainTitleProps {
  children: string;
}

const MainTitle = ({ children }: MainTitleProps) => (
  <div className={`batman-ui__main-title`}>
    <h1>{children}</h1>
  </div>
);

export default MainTitle;
