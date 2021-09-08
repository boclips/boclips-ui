import React from "react";
import { Tooltip as AntdTooltip } from "antd";
import s from "./style.module.less";

export interface Props {
  text: string;
  children: React.ReactNode;
}
export const Tooltip = ({ text, children }: Props) => (
  <AntdTooltip title={text} overlayClassName={s.tooltip} placement="bottom">
    <div className={s.hoverText}>{children}</div>
  </AntdTooltip>
);
