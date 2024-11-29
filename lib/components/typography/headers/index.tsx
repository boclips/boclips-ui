import React from 'react';
import { Base, HeaderProps } from './Base';

export const H1: React.FC<HeaderProps> = ({ children, size = 'xl', ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <Base as="h1" size={size} {...rest}>
      {children}
    </Base>
  );
};

export const H2: React.FC<HeaderProps> = ({ children, size = 'lg', ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <Base as="h2" size={size} {...rest}>
      {children}
    </Base>
  );
};

export const H3: React.FC<HeaderProps> = ({ children, size = 'md', ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <Base as="h3" size={size} {...rest}>
      {children}
    </Base>
  );
};

export const H4: React.FC<HeaderProps> = ({ children, size = 'sm', ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return (
    <Base as="h4" size={size} {...rest}>
      {children}
    </Base>
  );
};

export const H5: React.FC<HeaderProps> = ({ children, size, ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return size ? (
    <Base as="h5" size={size} {...rest}>
      {children}
    </Base>
  ) : (
    <Base as="h5" size="xs" weight="medium" {...rest}>
      {children}
    </Base>
  );
};

export const H6: React.FC<HeaderProps> = ({ children, size, ...rest }: React.PropsWithChildren<HeaderProps>) => {
  return size ? (
    <Base as="h6" size={size} {...rest}>
      {children}
    </Base>
  ) : (
    <Base as="h6" size="xs" weight="regular" {...rest}>
      {children}
    </Base>
  );
};
