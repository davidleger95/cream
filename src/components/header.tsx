import { Link } from 'gatsby';
import React from 'react';
import { styled } from 'linaria/react';

const StyledHeader = styled.div`
  grid-column: 1 / -1;
  color: white;
`;

const NavbarWrapper = styled.div`
  margin-bottom: -3rem;
  padding-bottom: 4rem;
  background-image: linear-gradient(180deg, #052333 0%, #03151f 100%);
`;

const Navbar = styled.nav`
  padding: 1.5rem 2rem;
  font-weight: 600;
  a {
    color: inherit;
    font-size: 1.25rem;
    text-decoration: inherit;
  }
`;

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <StyledHeader>
    <NavbarWrapper>
      <Navbar>
        <h1>
          <Link to="/">🏦 {siteTitle}</Link>
        </h1>
      </Navbar>
    </NavbarWrapper>
  </StyledHeader>
);

export default Header;
