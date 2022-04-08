import React, { useRef, useState } from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  text: string;
  children: React.ReactNode;
}

const Tooltip = ({ children, text }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [leftOffset, setLeftOffset] = useState<number>(0);

  const tooltipRef = useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    // This covers an edge case of screen resizing and not setting the offset back to default if it can center the tooltip correctly
    if (tooltipRef.current) {
      if (tooltipRef.current.getBoundingClientRect().x >= 0) {
        setLeftOffset(0);
      }
    }
  }, [isOpen]);

  React.useLayoutEffect(() => {
    // This shifts the tooltip back into the viewport
    if (tooltipRef.current) {
      if (tooltipRef.current.getBoundingClientRect().x < 0) {
        setLeftOffset(tooltipRef.current.getBoundingClientRect().x);
      }
    }
  });

  const translateX = leftOffset ? 0 : "-50%";

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className={s.wrapper}
    >
      {isOpen && (
        <>
          <div className={c(s.tooltipArrow)} />
          <div
            ref={tooltipRef}
            style={{
              left: leftOffset || "50%",
              transform: `translateX(${translateX})`,
            }}
            className={c(s.tooltip)}
          >
            <span role="figure">{text}</span>
          </div>
        </>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
