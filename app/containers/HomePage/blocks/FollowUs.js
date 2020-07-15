import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import H1 from 'components/H1';
import messages from '../messages';
import Facebook from '../resources/facebook.png';
import YouTube from '../resources/YouTube.png';
import Twitter from '../resources/twitter.png';
import Github from '../resources/Github.png';
import Reddit from '../resources/Reddit.png';
import Discord from '../resources/Discord.png';
import Instagram from '../resources/instagram.png';
import HexChat from '../resources/HexChat.png';
import GeneralChat from '../resources/Strape.png';
import HexMemes from '../resources/HexMemes.png';
import HexNews from '../resources/HexNews.png';
import HexCharts from '../resources/HexCharts.png';
import HexTrading from '../resources/HexTrading.png';

const StyledCol = styled(Col)`
  img {
    object-fit: contain;
  }
  span {
    font-size: 1.2em;
  }
  cursor: pointer;
`;

function Icon(props) {
  const { imgUrl, alt, name } = props;
  return (
    <StyledCol
      className="d-flex flex-column text-primary fit p-3"
      xl={3}
      lg={4}
      md={2}
      xs={1}
    >
      <Img src={imgUrl} alt={alt} />
      <FormattedMessage {...name} />
    </StyledCol>
  );
}

export default function() {
  return (
    <Container fluid className="bg-white p-5 text-center">
      <H1 bold color="#3C3C50">
        <FormattedMessage {...messages.follow_us_title} />
      </H1>
      <Row align="center">
        <Icon
          imgUrl={Twitter}
          alt="Richard's Twitter"
          name={messages.follow_us_richard_twitter}
        />
        <Icon
          imgUrl={YouTube}
          alt="Richard's youtube"
          name={messages.follow_us_richard_youtube}
        />
        <Icon
          imgUrl={Twitter}
          alt="HEX twitter"
          name={messages.follow_us_hex_twitter}
        />
        <Icon
          imgUrl={HexChat}
          alt="hexChat"
          name={messages.follow_us_hex_chat}
        />
        <Icon
          imgUrl={GeneralChat}
          alt="general Chat"
          name={messages.follow_us_general_chat}
        />
        <Icon
          imgUrl={HexMemes}
          alt="HexMemes"
          name={messages.follow_us_hex_memes}
        />
        <Icon
          imgUrl={HexNews}
          alt="HexNews"
          name={messages.follow_us_hex_news}
        />
        <Icon imgUrl={Github} alt="Github" name={messages.follow_us_github} />
        <Icon imgUrl={Reddit} alt="reddit" name={messages.follow_us_reddit} />
        <Icon
          imgUrl={Reddit}
          alt="Memes Reddit"
          name={messages.follow_us_memes_reddit}
        />
        <Icon
          imgUrl={Discord}
          alt="discord"
          name={messages.follow_us_discord}
        />
        <Icon
          imgUrl={HexCharts}
          alt="HexCharts"
          name={messages.follow_us_hex_charts}
        />
        <Icon
          imgUrl={HexTrading}
          alt="hexTrading"
          name={messages.follow_us_hex_trading}
        />
        <Icon
          imgUrl={Instagram}
          alt="instagram"
          name={messages.follow_us_instagram}
        />
        <Icon
          imgUrl={Facebook}
          alt="facebook"
          name={messages.follow_us_facebook}
        />
        <Icon
          imgUrl={YouTube}
          alt="HexYoutube"
          name={messages.follow_us_hex_youtube}
        />
      </Row>
    </Container>
  );
}

Icon.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.object.isRequired,
};
