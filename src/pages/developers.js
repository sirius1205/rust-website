import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  Banner,
  CommunityCard,
  DocCard,
  Icon,
  Layout,
  Link,
  PrimaryButtonLink,
  Section,
  SEO,
  useSiteMetadata,
} from 'gatsby-plugin-substrate';
import React from 'react';
import Lottie from 'react-lottie';

import { communityCardData } from '../../data/community-resources';
import ExploreLinkSection from '../components/layout/technology/ExploreLinkSection';
import SecondaryButton from '../components/ui/SecondaryButton';
import * as animationData from '../images/animation/dev-hero.json';

export default function Home() {
  const { siteMetadata } = useSiteMetadata();
  return (
    <Layout mode="full">
      <Banner />
      <SEO
        title="Developers Home"
        description="Substrate is powered by best-in-class cryptographic research and comes with peer-to-peer networking,
              consensus mechanisms, and much more."
      />
      <Section styles="mt-12">
        <div className="flex flex-col md:flex-row md:items-center doc-hero">
          <div className="md:w-1/2 mb-10 lg:m-0">
            <div className="text-5xl lg:text-6xl font-extrabold mb-6">
              Substrate <br /> Developer Hub
            </div>
            <h4 className="text-xl xl:text-3xl font-semibold">The center of knowledge</h4>
            <p className="mb-8 md:text-lg font-medium leading-relaxed">
              Substrate is powered by best-in-class cryptographic research and comes with peer-to-peer networking,
              consensus mechanisms, and much more.
            </p>
            <PrimaryButtonLink link={siteMetadata.docsUrl}>Get Started</PrimaryButtonLink>
          </div>
          <div className="flex justify-center md:w-1/2">
            <div className="lg:h-[430px] lg:w-[430px] lg:mt-8">
              <Lottie
                options={{
                  animationData,
                  loop: false,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                isClickToPauseDisabled={true}
              />
            </div>
          </div>
        </div>
      </Section>
      {/* Learn Subsrate Section */}
      <Section styles="relative">
        <div className="absolute inset-120 md:mt-20">
          <div className="lg:hidden">
            <StaticImage
              src={'../images/backgrounds/backgroundTwo.png'}
              alt={'Learn Substrate Background'}
              loading="eager"
              placeholder="none"
              layout="constrained"
            />
          </div>
          <div className="hidden lg:block">
            <StaticImage
              src={'../images/backgrounds/backgroundOne.png'}
              alt={'Learn Substrate Background'}
              loading="eager"
              placeholder="none"
            />
          </div>
        </div>
        <div className="h-full relative">
          <div className="text-center mb-16">
            <div className="text-5xl lg:text-6xl font-extrabold mb-3">Learn Substrate</div>
            <h4 className="text-xl xl:text-3xl font-semibold">Substrate developer knowledge base</h4>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:gap-0 lg:flex flex-col lg:flex-row lg:justify-between z-10">
            <DocCard
              title={`Documentation`}
              text={`Discover the principles and design decisions that Substrate is built on. Read about its key features and capabilties as well as the specific skills needed to be an effective Substrate blockchain developer.`}
              link={siteMetadata.docsUrl + `/quick-start/`}
              cta={`Get started`}
              iconName={`docs-icon`}
            />
            <DocCard
              title={`Reference`}
              text={`The Substrate reference section has everything you need to produce robust Substrate based blockchains. From beginner to expert, you can use this information with flexibly to suit your current needs.`}
              link={siteMetadata.docsUrl + `/reference/`}
              cta={`Learn and contribute`}
              iconName={`htgIcon`}
              animationDelay={200}
            />
            <DocCard
              title={`Tutorials`}
              text={`Create your first Substrate chain, perform a forkless upgrade, and more. This selection of tutorials will lead you through the process in sessions of up to two hours.`}
              link={siteMetadata.docsUrl + `/tutorials/`}
              cta={`Dive in`}
              iconName={`tutsIcon`}
              animationDelay={400}
            />
          </div>
        </div>
      </Section>
      {/* Playground Section */}
      <Section>
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="mb-16 lg:m-0 lg:w-1/2">
            <div className="font-title text-5xl lg:text-6xl font-extrabold mb-8">Playground</div>
            <h4 className="text-xl xl:text-3xl font-semibold">Set up a cloud sandbox</h4>
            <p className="max-w-lg leading-7 lg:pr-6">
              Building with Substrate requires different pieces of technology. We recommend picking a sandbox if
              you&apos;re just getting started and want to try things out. Or if you&apos;re hosting Substrate developer
              workshops or following tutorials, using a sandbox environment allows you to skip the preliminary set-up to
              the parts most important to you.
            </p>
            <div className="my-8">
              <button className="duration-150 ease-in hover:opacity-50">
                <Link className="flex items-center" to="/developers/playground/?deploy=node-template#config">
                  <Icon name="nodeTemplate" className="w-8 fill-current text-substrateDark dark:text-substrateWhite" />
                  <div className="text-xl ml-4 font-extrabold">Node Playground</div>
                </Link>
              </button>
              <button className="block mt-8 mb-16 duration-150 ease-in hover:opacity-50">
                <Link className="flex items-center" to="/developers/playground/?deploy=front-end-template#config">
                  <Icon name="feTemplate" className="fill-current text-substrateDark dark:text-substrateWhite" />
                  <div className="text-xl ml-4 font-extrabold text-left">Front-End Template Playground</div>
                </Link>
              </button>
            </div>
            <SecondaryButton cta link="/developers/playground/">
              Explore Playground
            </SecondaryButton>
          </div>
          <div data-aos="fade-left" className="hidden lg:flex justify-center lg:w-1/2">
            <Link to="/developers/playground/">
              <StaticImage
                backgroundColor="transparent"
                src="../images/png/developers/playground-hero.png"
                alt="Substrate Playground"
                layout="constrained"
              />
            </Link>
          </div>
        </div>
      </Section>
      {/* Connect With Community Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-center mb-10">
          <div className="lg:m-0 md:w-1/2">
            <div className="text-5xl lg:text-6xl font-extrabold mb-8">
              Connect with <br /> the community
            </div>
            <p className="max-w-lg text-xl">
              Network, share and learn from others who speak your (tech) language! Discover the various open
              communication channels where you can engage, participate and keep up with the latest developments.
            </p>
          </div>
          <div className="lg:p-6 lg:pr-0 md:w-1/2">
            <StaticImage
              backgroundColor="transparent"
              src="../images/png/developers/connect-with-the-community.jpg"
              alt="Connect With Substrate Community"
              layout="constrained"
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
        <div className="mt-12 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CommunityCard data={communityCardData} />
        </div>
      </Section>
      <ExploreLinkSection links={['technology', 'vision', 'ecosystem']} />
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
