import React from "react";
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from "@radix-ui/react-tooltip";
import c from "classnames";
import s from "./style.module.less";

export interface Props {
  text: string;
  isLarge?: boolean;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  offset?: number;
  asChild?: boolean;
  children: React.ReactElement;
}

const Tooltip = ({
  text,
  children,
  isLarge,
  align = "center",
  side = "top",
  offset,
  asChild = true,
}: Props) => {
  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild={asChild}>{children}</Trigger>
        <Portal>
          <Content
            className={c(s.content, {
              [s.small]: !isLarge,
              [s.large]: isLarge,
            })}
            align={align}
            side={side}
            alignOffset={offset}
          >
            {text}
            <Arrow className={s.arrow} />
          </Content>
        </Portal>
      </Root>
    </Provider>
  );
};

export default Tooltip;
