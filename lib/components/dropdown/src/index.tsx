import React from "react";
import c from "classnames";
import { Typography } from "@boclips-ui/typography";
import { Select } from "antd";
import ErrorIconSVG from "../resources/error-icon.svg";
import ArrowDownIcon from "../resources/down-icon.svg";
import s from "./style.module.less";

export interface Props {
  placeholder: string;
  onChange: (value: string[] | string) => void;
  options?: OptionsProps[];
  mode: "single" | "multiple";
  fitWidth?: boolean;
  dataQa?: string;
  showSearch?: boolean;
  disabled?: boolean;
  defaultValue?: string[] | string;
  showLabel?: boolean;
  labelText?: string;
  isError?: boolean;
  errorMessage?: string;
  errorMessagePlacement?: "top" | "bottom";
}

export interface OptionsProps {
  value: string;
  label?: React.ReactElement | string;
  "data-qa"?: string;
}

const Dropdown = ({
  placeholder,
  onChange,
  options,
  mode,
  fitWidth,
  dataQa,
  showSearch = false,
  disabled,
  defaultValue,
  showLabel = false,
  labelText,
  isError = false,
  errorMessage = "there is an error",
  errorMessagePlacement = "top",
}: Props) => {
  return (
    <div
      className={c(s.wrapper, {
        [s.fitWidth]: fitWidth,
      })}
      data-qa={dataQa}
    >
      {showLabel && (
        <Typography.Body as="div" className={s.dropdownLabel}>
          {labelText}
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
      <Select
        className={c(s.button, {
          [s.margin]: showLabel,
          [s.error]: isError,
        })}
        data-qa="select"
        disabled={disabled}
        size="large"
        showArrow
        showSearch={showSearch}
        dropdownAlign={{ offset: [0, -4] }}
        defaultValue={defaultValue}
        mode={mode === "multiple" ? "multiple" : undefined}
        options={options?.map((option) => ({
          key: option.value,
          value: option.value,
          label: option.label,
          dataQa: option["data-qa"],
        }))}
        onChange={onChange}
        popupClassName={c({
          [s.belowError]: isError && errorMessagePlacement === "top",
          [s.hasLabel]: showLabel,
        })}
        placeholder={placeholder}
        suffixIcon={<ArrowDownIcon />}
      />
      {isError && errorMessage && errorMessagePlacement === "bottom" && (
        <span className={c(s.errorMessage, s.bottom)} role="alert">
          <span>
            <ErrorIconSVG />
          </span>
          <span>{errorMessage}</span>
        </span>
      )}
    </div>
  );
};
export default Dropdown;
