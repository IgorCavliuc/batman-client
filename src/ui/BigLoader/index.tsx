import classNames from "classnames";
import "./style/index.scss";

interface BigLoaderType {
  theme?: string;
  children: string;
}
function BigLoader({ theme, children }: BigLoaderType) {
  const className = classNames("rapidnet-ati-big-loading__loaderloading", {
    [`rapidnet-ati-big-loading__loader--theme-${theme}`]: theme,
  });
  return (
    <div className="rapidnet-ati-big-loading">
      <div className={className}></div>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default BigLoader;
