import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import ModalVideo from 'react-modal-video';

import Icon from '../components/default/Icon';
import Article from '../components/layout/Article';
import Card from '../components/layout/ecosystem/Card';
import Section from '../components/layout/Section';
import Layout from '../components/site/Layout';
import SEO from '../components/site/SEO';
import PrimaryButton from '../components/ui/PrimaryButton';
import { isBrowser } from '../utils/browser';

const logos = [
  {
    logo: 'Logo 1',
    alt: 'Logo 7',
  },
  {
    logo: 'Logo 2',
    alt: 'Logo 8',
  },
  {
    logo: 'Logo 3',
    alt: 'Logo 9',
  },
  {
    logo: 'Logo 4',
    alt: 'Logo 10',
  },
  {
    logo: 'Logo 5',
    alt: 'Logo 11',
  },
  {
    logo: 'Logo 6',
    alt: 'Logo 12',
  },
];

export default function Home() {
  const [modalIsOpen, modalSetOpen] = useState(false);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
  });

  return (
    <Layout mode="full">
      {isBrowser && didMount && (
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={modalIsOpen}
          videoId="WFbUc15ZhgU"
          onClose={() => modalSetOpen(false)}
        />
      )}
      <SEO title="Substrate Ecosystem" />
      <Article>
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 lg:gap-16">
            <div className="lg:col-span-6 lg:col-start-6">
              <div className="grid grid-cols-3 gap-6 ecosystem-home-anim">
                {logos.map(({ logo, alt }, idx) => (
                  <div
                    key={idx}
                    className="shadow-xl aspect-w-1 aspect-h-1 transition-transform rounded-md bg-white dark:bg-substrateBlackish ecosystem-home-anim__item"
                  >
                    <div className="ecosystem-home-anim__logo">{logo}</div>
                    <div className="ecosystem-home-anim__logo ecosystem-home-anim__logo--alternative">{alt}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 lg:col-start-1 lg:row-start-1">
              <h1 className="mb-6">Substrate Teams</h1>
              <h3 className="mb-6 font-medium lg:pr-4">More than 150 teams are building on Substrate</h3>
              <p className="mb-8 text-lg font-medium leading-relaxed">
                Some of the most exciting projects in decentralized tech are building on Substrate, including
                parachains, independent layer-1 blockchains, and infrastructure and tooling solutions for a wide range
                of use cases.
              </p>
              <PrimaryButton link="/ecosystem/teams">View Teams</PrimaryButton>
            </div>
          </div>
        </Section>

        <Section>
          <div
            onClick={() => modalSetOpen(true)}
            className="mt-32 mb-44 aspect-w-4 aspect-h-3 md:aspect-w-16 md:aspect-h-9 lg:aspect-w-12 lg:aspect-h-5 bg-substrateDark rounded-md shadow-xl hover:scale-105 transition-transform cursor-pointer"
          >
            <div>
              <StaticImage
                src="../images/photos/ecosystem/home/youtube.jpg"
                className="w-full h-full m-0 relative rounded-md"
              />
              <div className="absolute left-0 bottom-0 p-8">
                <h3 className="text-white mb-2">Meet Substrate teams</h3>
                <p className="text-white opacity-75 m-0 text-lg">
                  Find out why more than 150 teams are building on Substrate.
                </p>
              </div>
              <Icon
                name="play"
                className="hidden sm:block absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 mb-44">
            <div className="aspect-w-7 aspect-h-5 bg-gray-200 row-start-1 lg:col-start-2">
              <div>Foto</div>
            </div>
            <div className="lg:col-start-1">
              <h2 className="h1">Substrate Builders Program</h2>
              <h3>Accelerate Your Project</h3>
              <p className="text-lg font-medium">
                The Substrate Builders Program directly supports you by bringing you Parity’s extensive resources,
                taking your Substrate ecosystem project to the next level.
              </p>
              <PrimaryButton link="/ecosystem/teams">Learn More</PrimaryButton>
            </div>
          </div>
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-start-3 relative hidden lg:block">
              <div className="absolute top-12 -right-20 w-full aspect-w-1 aspect-h-1">
                <Icon name="explore" />
              </div>
            </div>
            <div className="lg:row-start-1 lg:col-span-2 mb-11">
              <h2 className="h1">Explore the Ecosystem</h2>
            </div>
          </div>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="opportunities" />
              Opportunities
            </h2>
            <p className="text-lg font-medium">Jump start your project or your career in the blockchain space</p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Hackathons"
                icon="hackathons"
                description="Ready for the challenge? Build, create, and hack to your heart's content."
                link="/ecosystem/opportunities/hackathons"
                linkText="Join a hackathon"
                color="#ffbeed"
              />
              <Card
                title="Grants"
                icon="dollar"
                description="Got an idea that's ready to go? Web3 Foundation supports development work contributing to the Web3 goal."
                link="/ecosystem/opportunities/grants"
                linkText="Apply for a grant"
                color="#ffbeed"
                delay="200"
              />
              <Card
                title="Jobs"
                icon="desktop"
                description="We're always on the lookout for talented developers who are passionate about building a better future."
                link="/ecosystem/opportunities/jobs"
                linkText="Find your role"
                color="#ffbeed"
                delay="400"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="resources" />
              Resources
            </h2>
            <p className="text-lg font-medium">
              Additional learning materials provided by the community for the community.{' '}
            </p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Substrate Seminar"
                icon="graduation"
                description="Get the latest on the cutting-edge of blockchain from developers and projects building on Substrate. Every second Tuesday at 14:00 UTC."
                link="/ecosystem/resources/seminar"
                linkText="Join in"
                color="#d6ffcf"
              />
              <Card
                title="Awesome Substrate"
                icon="smile"
                description="Discover a rich source of content covering everything you need to know to get started, troubleshoot and fine-tune your skills."
                link="/ecosystem/resources/awesome-substrate"
                linkText="Dive in"
                color="#d6ffcf"
                delay="200"
              />
              <Card
                title="Community Resources"
                icon="house"
                description="One of Substrate's greatest strengths is its thriving and engaged community, who have created an ever-increasing list of resources."
                link="/ecosystem/resources/community-resources"
                linkText="Discover more"
                color="#d6ffcf"
                delay="400"
              />
            </div>
          </div>
        </Section>

        <Section>
          <div>
            <h2 className="font-extrabold">
              <Icon className="inline-block mr-4" name="connect" />
              Connect
            </h2>
            <p className="text-lg font-medium">
              Follow Substrate news and updates; get in touch with other devs in the community.
            </p>
            <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card
                title="Contact"
                icon="contact"
                description="Haven't found what you're looking for?"
                link="/ecosystem/connect/contact"
                linkText="Get in touch"
                color="#ccc8ff"
              />
              <Card
                title="Events"
                icon="event"
                description="In person or online, from meetups to conferences, there are a growing number of events in the ecosystem."
                link="https://www.parity.io/events/"
                linkText="Upcoming Events"
                color="#ccc8ff"
                delay="200"
              />
              <Card
                title="Newsletter"
                icon="paperplane"
                description="Get the inside view and the latest news popping into your inbox."
                link="/ecosystem/connect/newsletter"
                linkText="Sign up"
                color="#ccc8ff"
                delay="400"
              />
              <Card
                title="Blog"
                icon="pen"
                description="Tech, news, hackathons, events, milestones, and more. Follow our blog for detailed info on the latest updates"
                link="https://parity.io/blog"
                linkText="Head to the blog"
                color="#ccc8ff"
                delay="200"
              />
            </div>
          </div>
        </Section>
      </Article>
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
