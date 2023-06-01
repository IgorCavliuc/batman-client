import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import "./style/index.scss";
const ClassNames = require("classnames");

interface IInputType {
  className?: any;
  placeholder?: string | undefined;
  value?: string;
  onChange?: (v: any, e?: ChangeEvent<HTMLInputElement>) => void;
  changeError?: (e: any) => void;
  disabled?: boolean;
}

const Input = ({
  className: _className,
  placeholder,
  value,
  disabled = false,
}: IInputType) => {
  const className = ClassNames("agent-ui-input", {
    "agent-ui-input--active": !disabled,
    [_className]: _className,
  });

  const handleChange = useCallback(() => {}, []);
  return (
    <div className="agent-ui-input--wrapper">
      <div className={className}>
        <input
          placeholder={placeholder}
          value={value || ""}
          onChange={handleChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Input;
