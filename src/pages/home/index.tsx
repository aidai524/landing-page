import React from 'react';
import Navbar from '~src/components/navbar';
import Footer from '~src/components/footer';
import { Coins, MCoins } from '~src/components/conins';
import Banner from './Banner';
import Intro from './Intro';
import Roadmap from './Roadmap';
import Cooperation from './Cooperation';

import './index.scss';

const HomePage = () => {
  return (
    <div className="Home">
      <section className="Home_top">
        <img
          className="w-full s:hidden"
          src="//imagev2.xmcdn.com/storages/7e86-audiofreehighqps/8A/7B/CKwRIasFRKoDAAl0LgDuUmyF.png"
          alt=""
        />
        <img
          className="w-full l:hidden"
          src="//imagev2.xmcdn.com/storages/00f6-audiofreehighqps/7F/B2/CKwRINsFRKppAANvGADuUob_.png"
          alt=""
        />
        <Navbar />
        <Banner />
        <Coins />
        <MCoins />
      </section>
      <section className="mx-auto">
        <Intro />
        <Roadmap />
        <Cooperation />
      </section>
      <footer className="Home_footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
