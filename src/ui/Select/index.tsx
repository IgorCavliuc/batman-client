import { useState, useRef, useEffect, useCallback, ChangeEvent } from "react";
import ClassName from "classnames";
import "./index.scss";

interface IOption {
  id: string;
  src?: string;
  value: string;
}

interface IOptionType {
  option: IOption;
  active: boolean;
  subType?: string;
  selected: boolean;
  onChange: (e: IOption) => void;
  setCheckboxValue?: (e: any) => void;
}

const Option = ({
  subType,
  option,
  active,
  selected,
  onChange,
  setCheckboxValue,
}: any) => {
  const optionItem = useRef<HTMLDivElement | null>(null);

  const className = ClassName("batman-store-ui-select--option", {
    "batman-store-ui-select--option--active": active,
    "batman-store-ui-select--option--selected": selected,
  });

  const handleChange = useCallback(() => {
    if (onChange && option) {
      onChange(option);
    }
  }, [onChange, option]);

  const handleKeyWindow = useCallback(
    (e: KeyboardEvent) => {
      const enter = e.keyCode === 13;
      const space = e.keyCode === 32;

      if (active && (enter || space)) {
        handleChange();
      }
    },
    [active, handleChange]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyWindow);

    return () => {
      document.removeEventListener("keydown", handleKeyWindow);
    };
  }, [handleKeyWindow]);

  useEffect(() => {
    const node = optionItem.current;

    if (node && active) {
      const parent = node.closest(".batman-store-ui-select--options");

      if (parent) {
        const heightParent = node?.offsetHeight;
        const parentOffsetTopWindow = parent.getBoundingClientRect().top;

        const itemHeight = node.offsetHeight;
        const itemOffsetTopWindow = node.getBoundingClientRect().top;

        if (
          itemOffsetTopWindow + itemHeight >
          heightParent + parentOffsetTopWindow
        ) {
          parent.scrollTo(0, node.offsetTop - (heightParent - itemHeight - 10));
        }

        if (itemOffsetTopWindow < parentOffsetTopWindow) {
          parent.scrollTo(0, node.offsetTop);
        }
      }
    }
  }, [active, optionItem]);

  // const handleCheckboxChange = (option) => {
  //   setCheckboxValue((prevValue) => [
  //     ...prevValue.slice(0, option.id - 2),
  //     { ...option, check: !option.check },
  //     ...prevValue.slice(option.id),
  //   ]);
  // };
  return (
    <div
      ref={optionItem}
      className={className}
      key={option?.code}
      onClick={handleChange}
    >
      <span>{option?.name}</span>
    </div>
  );
};

interface ISelectType {
  index?: string;
  theme?: string;
  type?: string;
  placeholder?: string;
  searchValue?: string;
  message?: string;
  onBlur?: (e: string) => void | null;
  onChangeSearch?: (e: string) => void;
  value?: {
    id?: string;
    src?: string;
    value?: string;
  } | null;
  options?: IOption[];
  onChange?: (e: IOption | null) => void | null;
  className?: any;
  disabled?: boolean;
  // disabledClick?:()=>void,
  loading?: boolean;
  error?: boolean;
  noOption?: string;
  unit?: string;
  subType?: string;
  setCheckboxValue?: (e: any) => void;
}

const Select = ({
  index,
  theme,
  type = "select",
  placeholder = "",
  searchValue = "",
  message,
  onBlur,
  onChangeSearch,
  value,
  options,
  onChange,
  className: _className,
  disabled,
  // disabledClick,
  loading = false,
  error,
  unit,
  subType,
  noOption = "No options",
  field,
  form,
  valuesName,
}: any) => {
  const select = useRef<HTMLInputElement | null>(null);

  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const [selectGray, setSelectGray] = useState(false);
  const [keyIndex, setKeyIndex] = useState(-1);
  const handleChange = (selectedOption: any) => {
    form.setFieldValue(field.name, selectedOption);
    setOpen(false);
  };

  const handleBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  const className = ClassName("batman-store-ui-select--wrapper", {
    "batman-store-ui-select--disabled": disabled,
    "batman-store-ui-select--error": error,
    "batman-store-ui-select--gray": selectGray,
    [_className]: _className,
  });

  const classNameSelect = ClassName("batman-store-ui-select", {
    "batman-store-ui-select--close": type === "search",
  });

  const clearSelect = useCallback(() => {
    if (onChange) {
      onChange(null);
      setOpen(true);
    }
    if (onChangeSearch) {
      onChangeSearch("");
    }
  }, [onChange, onChangeSearch]);

  const changeOpen = useCallback(() => {
    if (type === "select") {
      setOpen((state) => !state);
    }
    if (type === "search") {
      clearSelect();
    }
  }, [clearSelect, type]);

  const handleFocus = useCallback(() => {
    if (type === "search" && !value) {
      setOpen(true);
    }
  }, [type, value, subType]);

  // const handleBlur = useCallback(() => {
  //   setFocus(false);
  //
  //   if (onBlur) {
  //     if (index) {
  //       onBlur(index);
  //     }
  //     // else {
  //     //   onBlur();
  //     // }
  //   }
  // }, [onBlur, index]);

  const handleChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onChangeSearch) {
        onChangeSearch(e.target.value);
      }
    },
    [onChangeSearch]
  );

  const handleWindow = useCallback(
    (e: Event) => {
      const node = select?.current;
      const target = e.target as HTMLTextAreaElement;

      if (node) {
        if (
          target.closest(".batman-store-ui-select--wrapper") !==
            node?.closest(".batman-store-ui-select--wrapper") &&
          !target.closest(".batman-store-ui-select--close")
        ) {
          setOpen(false);
          setKeyIndex(-1);
        }
      }
    },
    [select]
  );

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      const maxIndex = options?.length ? options.length - 1 : 0;

      const up = e.keyCode === 38;
      const down = e.keyCode === 40;
      const enter = e.keyCode === 13;
      const space = e.keyCode === 32;
      const esc = e.keyCode === 27;
      const tab = e.keyCode === 9;

      if ((open || focus) && (space || up || down)) {
        e.preventDefault();
      }

      if (focus && !open && (space || enter)) {
        setOpen(true);
      }

      if (open && (esc || tab)) {
        setOpen(false);
        setKeyIndex(-1);
      }

      if (open) {
        if (up) {
          setKeyIndex((state) => {
            if (state === 0 || state === -1) {
              return -1;
            }

            return state - 1;
          });
        }
        if (down) {
          setKeyIndex((state: number) => {
            if (state === maxIndex) {
              return maxIndex;
            }

            return state + 1;
          });
        }
      }
    },
    [open, focus, options]
  );
  //
  // const handleDisabledClick = useCallback(() => {
  //   if (disabled) {
  //     disabledClick();
  //   }
  // }, [disabled, disabledClick]);

  useEffect(() => {
    window.addEventListener("click", handleWindow);
    document.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("click", handleWindow);
      document.removeEventListener("keydown", handleKey);
    };
  }, [handleWindow, handleKey]);

  useEffect(() => {
    setKeyIndex(-1);
  }, [options]);

  useEffect(() => {
    if (theme === "gray-input") {
      if (value?.value?.trim() || searchValue?.trim() || focus) {
        setSelectGray(false);
      } else {
        setSelectGray(true);
      }
    }
  }, [theme, focus, value, searchValue]);

  // const handleChange = useCallback(
  //   (option: IOption) => {
  //     if (onChange) {
  //       onChange(option);
  //       setOpen(false);
  //     }
  //   },
  //   [onChange]
  // );

  useEffect(() => {
    const node = select.current;

    if (type === "search" && open && node) {
      node.focus();
    }
  }, [open, type, select]);

  return (
    <div data-index={index} className={className}>
      {type === "select" || (type === "search" && value) ? (
        <div
          className={classNameSelect}
          ref={select}
          tabIndex={1}
          {...(!disabled
            ? {
                onFocus: handleFocus,
                onBlur: handleBlur,
                onClick: changeOpen,
              }
            : {})}
        >
          <span className="batman-store-ui-select--placeholder">
            {form?.values[valuesName]?.name}
          </span>

          {unit ? (
            <span className="batman-store-ui-input--unit">{unit}</span>
          ) : null}
        </div>
      ) : type === "search" && !value ? (
        <div className="batman-store-ui-select-flex">
          <input
            className="batman-store-ui-select"
            value={searchValue}
            onChange={handleChangeSearch}
            // onBlur={handleBlur}
            placeholder={placeholder}
            ref={select}
            tabIndex={1}
            {...(!disabled
              ? {
                  onFocus: handleFocus,
                  onBlur: handleBlur,
                }
              : {})}
          />
        </div>
      ) : null}

      {error && message ? (
        <p className="batman-store-ui-select--error-message">{message}</p>
      ) : null}
      <div
        className="batman-store-ui-select--options"
        {...(!open ? { style: { display: "none" } } : {})}
      >
        {options?.length || loading ? (
          <>
            {options?.map((option: any, i: number) => (
              <Option
                key={i}
                option={option}
                active={i === keyIndex}
                selected={option.code === value?.code}
                value={field.value}
                onChange={(selected: any) => handleChange(selected)}
                onBlur={handleBlur}
              />
            ))}
            {loading ? (
              <div className="batman-store-ui-select--option batman-store-ui-select--option--loading">
                Loading
              </div>
            ) : null}
          </>
        ) : (
          <div className="batman-store-ui-select--option">{noOption}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
