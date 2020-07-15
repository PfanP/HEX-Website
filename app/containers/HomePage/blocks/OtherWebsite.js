import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Img from 'components/Img';
import H3 from 'components/H3';
import H1 from 'components/H1';
import Bar from 'components/Bar';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
import OtherWebsiteScreen1 from '../resources/other-website-screen-1.png';
import OtherWebsiteScreen2 from '../resources/other-website-screen-2.png';
import OtherWebsiteScreen3 from '../resources/other-website-screen-3.png';
import OtherWebsiteScreen4 from '../resources/other-website-screen-4.png';
import OtherWebsiteScreen5 from '../resources/other-website-screen-5.png';
import OtherWebsiteScreen6 from '../resources/other-website-screen-6.png';

const CardContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin-top: 4em;
    h1 {
      font-size: 2em;
      &:nth-child(2) {
        margin-top: 1em;
        margin-bottom: 0;
      }
    }
    h3 {
      font-size: 1em;
      margin-top: 1em;
    }
  }
`;

function Card(props) {
  const { imgURL, title, subTitle, description } = props;
  return (
    <CardContainer>
      <Img src={imgURL} alt="img-alt" />
      <H1 bold color="#6E6E8C">
        <FormattedMessage {...title} />
      </H1>
      <H1 bold color="#6E6E8C">
        <FormattedMessage {...subTitle} />
      </H1>
      <H3>
        <FormattedMessage {...description} />
      </H3>
    </CardContainer>
  );
}

export default function() {
  return (
    <Container fluid align="center" className="p-5">
      <H1 color="#3C3C50" bold>
        <FormattedMessage {...messages.other_website_title} />
      </H1>
      <Bar />
      <Row>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen1}
            title={messages.other_website_title1}
            subTitle={messages.other_website_sub_title1}
            description={messages.other_website_description1}
          />
        </Col>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen2}
            title={messages.other_website_title2}
            subTitle={messages.other_website_sub_title2}
            description={messages.other_website_description2}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen3}
            title={messages.other_website_title3}
            subTitle={messages.other_website_sub_title3}
            description={messages.other_website_description3}
          />
        </Col>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen4}
            title={messages.other_website_title4}
            subTitle={messages.other_website_sub_title4}
            description={messages.other_website_description4}
          />
        </Col>
      </Row>
      <Row>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen5}
            title={messages.other_website_title5}
            subTitle={messages.other_website_sub_title5}
            description={messages.other_website_description5}
          />
        </Col>
        <Col xl={6} lg={12} align="center">
          <Card
            imgURL={OtherWebsiteScreen6}
            title={messages.other_website_title6}
            subTitle={messages.other_website_sub_title6}
            description={messages.other_website_description6}
          />
        </Col>
      </Row>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.object.isRequired,
  subTitle: PropTypes.object,
  description: PropTypes.object,
  imgURL: PropTypes.string.isRequired,
};
