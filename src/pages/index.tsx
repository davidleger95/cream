import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HistoryIcon from '@material-ui/icons/History';
import AccountsOverview from '../components/AccountsOverview';
import ServiceSummary from '../components/ServiceSummary';
import RecentActivity from '../components/RecentActivity';
import Footer from '../components/Footer';
import { styled } from 'linaria/react';

const Sticky = styled.div`
  position: sticky;
  top: 1rem;
  display: inherit;
  gap: inherit;
  align-self: start;
`;

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <AccountsOverview />
        <h2>
          <HistoryIcon />
          &nbsp;Recent Activity
        </h2>
        <RecentActivity />
      </main>
      <aside>
        <Sticky>
          <ServiceSummary />
          <Footer />
        </Sticky>
      </aside>
    </Layout>
  );
};

export default IndexPage;
