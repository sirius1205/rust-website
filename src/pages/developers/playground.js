import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Layout, PlaygroundCard, Section, SEO } from 'gatsby-plugin-substrate';
import React, { useEffect, useState } from 'react';

export default function Playground() {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const deploy = urlParams.get('deploy');
    deploy === 'node-template'
      ? setSelected('node-template')
      : deploy === 'front-end-template'
      ? setSelected('front-end-template')
      : null;
  }, []);
  return (
    <Layout>
      <SEO title="Substrate Playground" description="Set up a cloud sandbox" />
      <Section styles="mt-12 md:mb-36">
        <div className="flex flex-col md:flex-row md:items-center doc-hero">
          <div className="md:w-1/2 mb-10 lg:m-0 md:pr-4 xl:pr-0">
            <h1 className="font-title text-5xl lg:text-6xl font-extrabold mb-8">Playground</h1>
            <h4 className="text-xl xl:text-3xl font-semibold">Set up a cloud sandbox</h4>
            <p className="max-w-lg">
              Building with Substrate requires different pieces of technology. We recommend picking a sandbox if
              you&apos;re just getting started and want to try things out. Or if you&apos;re hosting Substrate developer
              developer workshops or following tutorials, using a sandbox environment allows you to skip the preliminary
              set-up to get to the parts most important to you.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2 rounded-tl-xl overflow-hidden">
            <StaticImage
              src="../../images/png/developers/playground-hero.png"
              alt="Substrate Playground"
              placeholder="none"
            />
          </div>
        </div>
      </Section>
      <Section>
        <div
          id="config"
          className="mx-auto max-w-xl text-center font-extrabold text-4xl xl:text-6xl scroll-margin-top-100"
        >
          Select Playground Configuration
        </div>
        <div className="my-20 px-6 flex flex-col items-center lg:flex-row lg:justify-center">
          <PlaygroundCard
            icon={'node'}
            preSelected={selected === 'node-template'}
            title={`Node Template`}
            description={`A “skeleton blockchain” with essential capabilities, including P2P
              networking, consensus, finality, account, transaction and sudo
              governance modules.`}
            listTitle={'Key Runtime Modules'}
            components={['pallet_balances', 'pallet_transaction_payment', 'pallet_sudo', 'pallet_template']}
            link={`https://playground.substrate.dev/?deploy=node-template`}
          />
          <PlaygroundCard
            icon={'front'}
            preSelected={selected === 'front-end-template'}
            title={`Front-End Template`}
            description={`A modular UI built with ReactJS to act as a front-end to the Substrate 
              Node Template. It contains all necessary components to interact with the Node 
              Template’s runtime.`}
            listTitle={'Key Components'}
            components={['Interactor', 'MetaData', 'Balances', 'BlockNumber']}
            link={` https://playground.substrate.dev/?deploy=front-end-template`}
          />
        </div>
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
