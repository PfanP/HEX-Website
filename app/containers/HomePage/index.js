import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import FirstBlock from './blocks/FirstBlock';
import SecondBlock from './blocks/SecondBlock';
import ThirdBlock from './blocks/ThirdBlock';
import FourthBlock from './blocks/FourthBlock';
import FifthBlock from './blocks/FifthBlock';
import SixthBlock from './blocks/SixthBlock';
import SeventhBlock from './blocks/SevnthBlock';
import GetHEXToday from './blocks/GetHexToday';
import EigthBlock from './blocks/EigthBlock';
import VideoBlock from './blocks/VideoBlock';
import GetHEX from './blocks/GetHex';
import GetHexNews from './blocks/GetHexNews';
import GoToFaqs from './blocks/GoToFaqs';
import TechStuff from './blocks/TechStuff';
import OtherWebsite from './blocks/OtherWebsite';
import FollowUs from './blocks/FollowUs';
import Footer from './blocks/Footer';

export function HomePage() {
  return (
    <article>
      <Helmet>
        <title>HEX</title>
        <meta name="description" content="HEX" />
      </Helmet>
      <Fragment>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <FifthBlock />
        <SixthBlock />
        <SeventhBlock />
        <GetHEXToday />
        <EigthBlock />
        <VideoBlock />
        <GetHEX />
        <GetHexNews />
        <GoToFaqs />
        <TechStuff />
        <OtherWebsite />
        <GetHEXToday />
        <FollowUs />
        <Footer />
      </Fragment>
    </article>
  );
}

HomePage.propTypes = {};

export default HomePage;
