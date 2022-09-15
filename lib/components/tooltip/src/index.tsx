import React, { useRef, useState } from "react";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  text: string;
  children: React.ReactNode;
}

const PADDING_X = 2;

const Tooltip = ({ children, text }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [leftOffset, setLeftOffset] = useState<number>(0);

  const tooltipRef = useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    // This covers an edge case of screen resizing and not setting the offset back to default if it can center the tooltip correctly
    if (tooltipRef.current) {
      if (
        tooltipRef.current.getBoundingClientRect().x >= 0 ||
        tooltipRef.current.getBoundingClientRect().right <=
          document.body.clientWidth
      ) {
        setLeftOffset(0);
      }
    }
  }, [isOpen]);

  React.useLayoutEffect(() => {
    // This shifts the tooltip back into the viewport
    if (tooltipRef.current) {
      const boundingRect = tooltipRef.current.getBoundingClientRect();

      if (boundingRect.width > document.body.clientWidth) {
        return;
      }

      if (boundingRect.x < 0) {
        setLeftOffset(boundingRect.x - PADDING_X);
      } else if (boundingRect.right > document.body.clientWidth) {
        setLeftOffset(
          (previousOffset) =>
            boundingRect.right -
            document.body.clientWidth +
            PADDING_X +
            previousOffset
        );
      }
    }
  });

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
              left: `calc(50% - ${leftOffset}px)`,
              transform: `translateX(-50%)`,
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
