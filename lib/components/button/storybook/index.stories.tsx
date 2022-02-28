import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Button, { Props } from "../src";
// @ts-ignore
import SearchIcon from "../resources/search-icon.svg";
// @ts-ignore
import s from "./styles.module.less";

interface StorybookProps {
  theme: "lti" | "publishers" | "text";
}

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<Props & StorybookProps> = ({
  onClick,
  theme,
  iconOnly,
  type,
  height,
  width,
  disabled,
  icon,
  text,
}: Props & StorybookProps) => (
  <div style={{ height: "55px" }} className={s[theme]}>
    <Button
      aria-label="hello"
      onClick={onClick}
      iconOnly={iconOnly}
      type={type}
      height={height}
      width={width}
      disabled={disabled}
      icon={icon}
      text={text}
    />
  </div>
);

export const LTI = Template.bind({});
export const PUBLISHERS = Template.bind({});
export const TEXT = Template.bind({});

LTI.args = {
  theme: "lti",
  // @ts-ignore
  type: "",
  onClick: () => null,
  iconOnly: false,
  height: undefined,
  width: undefined,
  disabled: false,
  icon: undefined,
  text: "Search",
};

PUBLISHERS.args = {
  theme: "publishers",
  onClick: () => null,
  iconOnly: false,
  // @ts-ignore
  type: "",
  height: undefined,
  width: undefined,
  disabled: false,
  icon: <SearchIcon />,
  text: "Search",
};

TEXT.args = {
  theme: "text",
  onClick: () => null,
  iconOnly: false,
  // @ts-ignore
  type: "",
  height: undefined,
  width: undefined,
  disabled: false,
  icon: (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none">
      <path
        d="M7 9V15M11 9V15M1 5H17M16 5L15.133 17.142C15.0971 17.6466 14.8713 18.1188 14.5011 18.4636C14.1309 18.8083 13.6439 19 13.138 19H4.862C4.35614 19 3.86907 18.8083 3.49889 18.4636C3.1287 18.1188 2.90292 17.6466 2.867 17.142L2 5H16ZM12 5V2C12 1.73478 11.8946 1.48043 11.7071 1.29289C11.5196 1.10536 11.2652 1 11 1H7C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V5H12Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  text: "Remove",
};
