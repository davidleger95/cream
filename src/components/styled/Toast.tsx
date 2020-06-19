import { styled } from 'linaria/react';
import React, { FC } from 'react';

import ErrorIcon from '@material-ui/icons/Error';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';

interface ToastProps {
  type?: 'error' | 'warning' | 'info';
}

const ToastWrapper = styled.div<ToastProps>`
  --toast-color: ${props => {
    switch (props.type) {
      case 'error':
        return 'var(--c-red)';
      case 'warning':
        return 'var(--c-orange)';
      case 'info':
        return 'var(--c-blue)';
      default:
        return '';
    }
  }};

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  padding: 1.5rem;
  overflow: auto;
  color: var(--toast-color);
  font-size: 1.2rem;
  background-color: var(--gs-100);
  border-left: 5px solid var(--toast-color);
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);

  p {
    align-self: center;
  }
`;

const ToastIcon: FC<ToastProps> = ({ type }) => {
  switch (type) {
    case 'error':
      return <ErrorIcon />;
    case 'warning':
      return <WarningIcon />;
    case 'info':
      return <InfoIcon />;
    default:
      return <div />;
  }
};

const Toast: FC<ToastProps> = ({ children, ...props }) => (
  <ToastWrapper {...props}>
    <ToastIcon {...props} />
    <p>{children}</p>
  </ToastWrapper>
);

export default Toast;
