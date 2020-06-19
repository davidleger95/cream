import React, { FC } from 'react';
import { styled } from 'linaria/react';
import { $ } from '../../utils/currency';

const StyledDisplayAmount = styled.span<{ isPositive?: boolean }>`
  color: ${p => (p.isPositive ? 'var(--c-turquoise)' : 'var(--c-pink)')};
  font-weight: 600;
`;

const DisplayAmount: FC<{ amount: number }> = ({ amount }) => {
  return (
    <StyledDisplayAmount isPositive={amount >= 0}>
      {$(amount)}
    </StyledDisplayAmount>
  );
};

export default DisplayAmount;
