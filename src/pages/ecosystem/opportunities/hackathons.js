import { graphql } from 'gatsby';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';
import React from 'react';

import hackathons from '../../../../data/hackatons.json';
import EventCard from '../../../components/layout/ecosystem/EventCard';
import Section from '../../../components/layout/Section';
import Layout from '../../../components/site/Layout';
import SEO from '../../../components/site/SEO';

export default function Hackathons({ pageContext }) {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout layout="sidebar">
      <SEO title="Hackathons" />
      <Section>
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator=""
          crumbLabel="Hackathons"
          hiddenCrumbs={['/', '/ecosystem/opportunities']}
          disableLinks={['/ecosystem/opportunities/hackathons']}
          className="breadcrumb__list breadcrumb__list__item breadcrumb__separator breadcrumb__link breadcrumb__link__active"
        />
      </Section>
      <Section>
        <h2 className="text-4xl font-bold mb-4">Hackathons</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget libero in purus rutrum condimentum. Phasellus
          condimentum enim quis purus pellentesque, ut varius magna egestas. Donec libero leo, sagittis vel{' '}
        </p>
        {hackathons.map((hackathon, idx) => (
          <EventCard key={idx} event={hackathon} />
        ))}
      </Section>
    </Layout>
  );
}

export const query = graphql`
  query {
    locales: allLocale {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
