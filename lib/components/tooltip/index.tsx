import React from 'react';
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from '@radix-ui/react-tooltip';
import c from 'classnames';
import s from './style.module.less';

export interface TooltipProps {
  text: string | React.ReactElement;
  isLarge?: boolean;
  contentClassName?: string;
  align?: 'start' | 'center' | 'end';
  side?: 'top' | 'right' | 'bottom' | 'left';
  offset?: number;
  asChild?: boolean;
  children: React.ReactElement;
}

export const Tooltip = ({
  text,
  children,
  isLarge,
  contentClassName = '',
  align = 'center',
  side = 'top',
  offset,
  asChild = true,
}: TooltipProps) => {
  return (
    <Provider delayDuration={0}>
      <Root>
        <Trigger asChild={asChild}>{children}</Trigger>
        <Portal>
          <Content
            className={c(
              s.content,
              {
                [s.small]: !isLarge,
                [s.large]: isLarge,
              },
              { contentClassName }
            )}
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
