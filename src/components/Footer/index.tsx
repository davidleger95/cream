import React from 'react';
import { styled } from 'linaria/react';

const StyledFooter = styled.footer`
  color: var(--gs-60);
  font-size: 0.8rem;
  text-align: center;

  a {
    color: inherit;

    &:hover {
      color: var(--gs-50);
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <p>
        © {new Date().getFullYear()}, Built with{' '}
        <span style={{ color: 'var(--c-pink)' }}>❤︎</span> by
        {` `}
        <a href="https://www.davejs.dev">dave.js</a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
