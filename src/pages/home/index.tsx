import React from 'react';
import Navbar from '~src/components/navbar';
import { BlockChain, GridRect } from '~src/components/pic';
import Banner from './Banner';
import Intro from './Intro';

import './index.scss';

const HomePage = () => {
  return (
    <div className="Home">
      <section className="Home_top">
        <GridRect />
        <Navbar />
        <Banner />
        <BlockChain />
      </section>
      <section className="Home_main">
        <Intro />
      </section>
      <footer className="Home_footer"></footer>
    </div>
  );
};

export default HomePage;
