import "./index.scss";
import { useCallback } from "react";
const classNames = require("classnames");

interface ButtonType {
  children?: React.ReactNode;
  theme?: string;
  onClick?: () => void;
  disabled?: boolean;
  ico?: string;
  className?: string;
}
const Button = ({
  children = "Button",
  className: _className,
  theme = "blue",
  onClick,
  disabled = false,
  ico,
}: ButtonType) => {
  const handleClick = useCallback(() => {
    if (onClick && !disabled) {
      onClick();
    }
  }, [onClick, disabled]);
  const ButtonClass = classNames("batman-ui--button", {
    [`batman-ui--button--theme-${theme}`]: theme,
    "batman-ui--button--disabled": disabled,
    [`${_className}`]: _className,
  });

  return (
    <button className={ButtonClass} onClick={handleClick}>
      <img src={ico} alt="" />
      {children}
    </button>
  );
};

export default Button;
