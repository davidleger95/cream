import { styled } from 'linaria/react';

const Card = styled.div<{ accentColor?: string; sticky?: boolean }>`
  position: ${p => (p.sticky ? 'sticky' : 'static')};
  top: 1rem;
  display: grid;
  gap: 0.5rem;
  justify-items: start;
  padding: 1.5rem;
  padding-top: calc(1.5rem - 5px);
  overflow: auto;
  color: var(--gs-10);
  background-color: var(--gs-100);
  border-top: 5px solid ${({ accentColor = 'transparent' }) => accentColor};
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.2);

  h2,
  h4 {
    color: ${({ accentColor = 'inherit' }) => accentColor};
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  data {
    font-weight: 500;
    font-size: 1.5rem;
  }

  @keyframes pulse {
    0% {
      transform: translateX(-10%);
    }
    100% {
      transform: translateX(10%);
    }
  }

  a {
    color: var(--gs-70);
    font-size: 0.9em;
    text-decoration: inherit;
    transition: color 100ms ease-in-out;

    svg {
      animation-duration: 0.5s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover,
    &:focus {
      color: ${({ accentColor = 'inherit' }) => accentColor};

      svg {
        animation-name: pulse;
      }
    }
  }

  footer {
    display: grid;
    gap: 0.25rem;
    justify-self: stretch;
    margin: 1rem -1.5rem -1.5rem -1.5rem;
    padding: inherit;
    background-color: var(--gs-95);
  }
`;

export default Card;
