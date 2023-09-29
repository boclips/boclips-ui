import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { InputText, BoInputProps } from "../src";
import SearchIcon from "./search-icon.svg";

export default {
  title: "Input text",
  component: InputText,
} as Meta;

const Template: Story<BoInputProps> = ({
  id,
  onChange,
  onFocus,
  onBlur,
  isError,
  errorMessage,
  icon,
  allowClear,
  showLabelText,
  placeholder,
  defaultValue,
  height,
  constraints,
  labelText,
}: BoInputProps) => (
  <>
    <InputText
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isError={isError}
      errorMessage={errorMessage}
      icon={<SearchIcon />}
      allowClear={allowClear}
      showLabelText={showLabelText}
      inputType="text"
      placeholder={placeholder}
      defaultValue={defaultValue}
      height={height}
      constraints={constraints}
      labelText={labelText}
    />
    <InputText
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isError={isError}
      errorMessage={errorMessage}
      icon={icon}
      allowClear={allowClear}
      showLabelText={showLabelText}
      inputType="textarea"
      placeholder={placeholder}
      defaultValue={defaultValue}
      height={height}
      constraints={constraints}
      labelText={labelText}
    />
    <InputText
      id={id}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      isError={isError}
      errorMessage={errorMessage}
      icon={icon}
      allowClear={allowClear}
      showLabelText={showLabelText}
      inputType="password"
      placeholder={placeholder}
      defaultValue={defaultValue}
      height={height}
      constraints={constraints}
      labelText="password"
    />
  </>
);

export const Sample = Template.bind({});

Sample.args = {
  id: "input-id",
  onChange: () => console.log("onChange"),
  onFocus: () => console.log("onFocus"),
  onBlur: () => console.log("onBlur"),
  isError: false,
  errorMessage: "error message",
  icon: undefined,
  allowClear: true,
  showLabelText: true,
  inputType: "text",
  placeholder: "this is a placeholder",
  defaultValue: undefined,
  height: "48px",
  constraints: { required: true, minLength: 2 },
  labelText: "search:",
};
