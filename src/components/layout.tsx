/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain';
import { SiteTitleQueryQuery } from '../types/graphql';
import Header from './header';
import './layout.css';
import { styled } from 'linaria/react';

const useSiteTitle = () => {
  const data: SiteTitleQueryQuery = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return oc(data).site.siteMetadata.title('');
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr minmax(300px, 2fr);
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;

  main,
  aside {
    display: inherit;
    gap: inherit;
  }
`;

const Layout: React.FC = ({ children }) => {
  const title = useSiteTitle();

  return (
    <>
      <Header siteTitle={title} />
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
