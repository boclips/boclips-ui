import React, { Ref, useEffect, useState } from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import ErrorIconSVG from "./resources/error-icon.svg";
import CrossIconSVG from "./resources/cross-icon.svg";
import s from "./style.module.less";

export interface BoInputProps extends InputProps {
  id: string;
  onChange: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  isError?: boolean;
  errorMessage?: string;
  icon?: React.ReactElement;
  allowClear?: boolean;
  className?: string;
}

interface InputProps {
  showLabelText?: boolean;
  inputType: "text" | "textarea" | "email";
  placeholder?: string;
  defaultValue?: string;
  height?: string;
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
      isError = false,
      errorMessage = "there is an error",
      placeholder = "Search...",
      id,
      defaultValue = "",
      inputType,
      height,
      constraints = {
        required: false,
        minLength: 0,
      },
      icon,
      showLabelText = true,
      labelText,
      allowClear = false,
      className,
    }: BoInputProps,
    ref: React.Ref<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const [value, setValue] = useState<string>(defaultValue);

    useEffect(() => {
      onChange(value);
    }, [value]);

    const renderInput = () => {
      switch (inputType) {
        case "text":
        case "email":
          return (
            <input
              minLength={constraints?.minLength}
              required={constraints?.required}
              placeholder={placeholder}
              type={inputType}
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
    };

    const onClear = () => {
      setValue("");
    };

    return (
      <label htmlFor={id} className={c(s.wrapper, className)}>
        {showLabelText && (
          <Typography.Body as="div" className="text-gray-800">
            {labelText}{" "}
            {!constraints.required && (
              <span className={s.optional}>(Optional)</span>
            )}
          </Typography.Body>
        )}
        {isError && (
          <span className={s.errorMessage}>
            <ErrorIconSVG />
            {errorMessage}
          </span>
        )}
        <div style={{ height }} className={s.inputWrapper}>
          {renderInput()}
          {icon && (
            <div data-qa="search-icon" className={s.icon}>
              {icon}
            </div>
          )}
          {allowClear && defaultValue?.length > 0 && (
            <button
              type="button"
              className={s.clearButton}
              data-qa="clear-icon"
              onClick={onClear}
            >
              <CrossIconSVG />
            </button>
          )}
        </div>
      </label>
    );
  }
);