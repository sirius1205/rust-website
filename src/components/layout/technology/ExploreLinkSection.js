import React from 'react';

import Icon from '../../default/Icon';
import LineArrowButton from '../../ui/LineArrowButton';
import Section from '../Section';

const exploreLinks = {
  technology: {
    title: 'Technology',
    description:
      'Learn why Substrate is the most powerful framework for quickly building customized, future-proof blockchains',
    link: '/technology',
    linkText: 'Explore the Tech',
    icon: 'diamond-green',
  },
  developerHub: {
    title: 'Developer Hub',
    description: 'Dive into documentation, tutorials, and resources to immediately get started building with Substrate',
    link: 'http://docs.substrate.io/',
    linkText: 'Start building',
    icon: 'diamond-pink',
  },
  vision: {
    title: 'Vision',
    description:
      'Substrate is the backbone of the Polkadot ecosystem, building the decentralized and fair internet of the future',
    link: '/vision/substrate-and-polkadot',
    linkText: 'Discover more',
    icon: 'diamond-purple',
  },
  ecosystem: {
    title: 'Ecosystem',
    description:
      'Access resources, maximize opportunities, and connect with a thriving network of Substrate enthusiasts and builders',
    link: '/ecosystem',
    linkText: 'Check out the Ecosystem',
    icon: 'diamond-yellow',
  },
  projects: {
    title: 'Projects',
    description: 'See how Substrate has been implemented by innovative teams in many industries around the world',
    link: '/ecosystem/projects',
    linkText: 'Meet The Teams',
    icon: 'diamond-yellow',
  },
};

const ExploreLinkSection = ({ links }) => {
  const currentLinks = [];

  links.forEach(link => {
    currentLinks.push(exploreLinks[link]);
  });

  return (
    <div className="bg-substrateGray-light dark:bg-substrateDarkest pb-10 pt-20">
      <Section>
        <h4 className="text-2xl font-bold mb-16">Explore More Substrate</h4>
        <div className="sm:grid grid-cols-3 gap-6 xl:gap-24">
          {currentLinks.map(({ title, description, link, linkText, icon }, index) => (
            <div key={index} className="mb-16 sm:mb-0 flex flex-col justify-between">
              <div>
                <Icon name={icon} className="mb-6 w-8 h-8" />
                <h5 className="text-xl font-bold mb-6">{title}</h5>
                <p>{description}</p>
              </div>
              <LineArrowButton link={link}>{linkText}</LineArrowButton>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default ExploreLinkSection;
