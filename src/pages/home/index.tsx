import React from 'react';
import Navbar from '~src/components/navbar';
import { BlockChain, GridRect } from '~src/components/pic';
import Footer from '~src/components/footer';
import Banner from './Banner';
import Intro from './Intro';
import Roadmap from './Roadmap';

// import union from 'bundle-text:~/src/assets/Union.svg';
import './index.scss';

// const union = new URL('~/src/assets/Union.svg', import.meta.url);

const HomePage = () => {
  return (
    <div className="Home">
      <section className="Home_top">
        {/* <GridRect /> */}
        <img
          className="w-full s:hidden"
          src="https://aod.cos.tx.xmcdn.com/storages/fb80-audiofreehighqps/7E/FD/CKwRIJIFQy3XAACMJwDt48UJ.svg"
          alt=""
        />
        <img
          className="w-full l:hidden"
          src="https://aod.cos.tx.xmcdn.com/storages/1655-audiofreehighqps/B8/86/CKwRIJEFRBlpAADLSwDuFkXo.svg"
          alt=""
        />
        <Navbar />
        <Banner />
      </section>
      <section className="mx-auto">
        <Intro />
        <Roadmap />
      </section>
      <footer className="Home_footer">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
