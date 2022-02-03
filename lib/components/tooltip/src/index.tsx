import React, { useState } from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ children, text }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={s.wrapper}
    >
      {isOpen && (
        <div className={c(s.tooltip)}>
          <span role="figure">{text}</span>
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
