import React from "react";
import AntdTooltip, { TooltipPlacement } from "antd/lib/tooltip";
import s from "./style.module.less";

export interface Props {
  text: string;
  placement: TooltipPlacement;
  children: React.ReactNode;
}
export const Tooltip = ({ text, children, placement = "bottom" }: Props) => (
  <AntdTooltip title={text} overlayClassName={s.tooltip} placement={placement}>
    {children}
  </AntdTooltip>
);
