import React, { Ref, useEffect, useState } from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import ErrorIconSVG from "./resources/error-icon.svg";
import CrossIconSVG from "./resources/cross-icon.svg";
import PasswordHiddenIcon from "./resources/password-hidden.svg";
import PasswordVisibleIcon from "./resources/password-visible.svg";
import s from "./style.module.less";

export interface BoInputProps extends InputProps {
  id: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: (e: any) => void;
  isError?: boolean;
  errorMessage?: string;
  icon?: React.ReactElement;
  allowClear?: boolean;
  className?: string;
  name?: string;
  errorMessagePlacement?: "top" | "bottom";
}

interface InputProps {
  showLabelText?: boolean;
  inputType: "text" | "textarea" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
  height?: string;
  width?: string;
  constraints?: BoInputConstraints;
  labelText?: string;
}

interface BoInputConstraints {
  required?: boolean;
  minLength?: number;
}

export const InputText = React.forwardRef(
  (
    {
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      isError = false,
      errorMessage,
      placeholder = "Search...",
      id,
      defaultValue = "",
      inputType,
      height,
      width,
      constraints,
      icon,
      showLabelText = true,
      labelText,
      allowClear = false,
      className,
      name,
      errorMessagePlacement = "top",
    }: BoInputProps,
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const [value, setValue] = useState<string>(defaultValue);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
      onChange(value);
    }, [value]);

    const renderInput = React.useMemo(() => {
      const passwordDisplayMode = showPassword ? "text" : "password";
      switch (inputType) {
        case "text":
        case "email":
        case "password":
          return (
            <input
              minLength={constraints?.minLength}
              required={constraints?.required}
              placeholder={placeholder}
              type={inputType === "password" ? passwordDisplayMode : inputType}
              name={name}
              id={id}
              onChange={(e) => setValue(e.target.value)}
              className={c(s.input, {
                [s.error]: isError,
                [s.withIcon]: icon,
              })}
              value={value}
              ref={ref as Ref<HTMLInputElement>}
              onFocus={onFocus}
              onBlur={onBlur}
              onKeyDown={onKeyDown}
            />
          );
        case "textarea":
          return (
            <textarea
              minLength={constraints?.minLength}
              required={constraints?.required}
              placeholder={placeholder}
              id={id}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              className={c(s.input, {
                [s.error]: isError,
              })}
              value={value}
              ref={ref as Ref<HTMLTextAreaElement>}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          );
        default:
          return null;
      }
    }, [
      inputType,
      constraints?.minLength,
      constraints?.required,
      placeholder,
      name,
      id,
      isError,
      icon,
      value,
      ref,
      onFocus,
      onBlur,
      onKeyDown,
      showPassword,
    ]);

    const onClear = () => {
      setValue("");
    };

    return (
      <label htmlFor={id} className={c(s.wrapper, className)}>
        {showLabelText && (
          <Typography.Body as="div" className="text-gray-800">
            {labelText}{" "}
            {constraints?.required === false && (
              <span className={s.optional}>(Optional)</span>
            )}
          </Typography.Body>
        )}
        {isError && errorMessage && errorMessagePlacement === "top" && (
          <span className={s.errorMessage} role="alert">
            <span>
              <ErrorIconSVG />
            </span>
            <span>{errorMessage}</span>
          </span>
        )}
        <div
          style={{ height, width }}
          className={c(s.inputWrapper, {
            [s.margin]: showLabelText,
          })}
        >
          {renderInput}
          {icon && (
            <div data-qa="search-icon" className={s.icon}>
              {icon}
            </div>
          )}
          {inputType !== "password" && allowClear && defaultValue?.length > 0 && (
            <button
              type="button"
              className={s.clearButton}
              data-qa="clear-icon"
              onClick={onClear}
            >
              <CrossIconSVG />
            </button>
          )}
          {inputType === "password" && (
            <button
              type="button"
              className={s.togglePasswordButton}
              data-qa="toggle-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <PasswordVisibleIcon /> : <PasswordHiddenIcon />}
            </button>
          )}
        </div>
        {isError && errorMessage && errorMessagePlacement === "bottom" && (
          <span className={c(s.errorMessage, s.bottom)} role="alert">
            <span>
              <ErrorIconSVG />
            </span>
            <span>{errorMessage}</span>
          </span>
        )}
      </label>
    );
  }
);
