import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Img from 'components/Img';
import messages from '../messages';
import BenefitUnchangable from '../resources/benefit-unchangable.png';
import BenefitControl from '../resources/benefit-control.png';
import BenefitHonest from '../resources/benefit-honest.png';
import BenefitResponsible from '../resources/benefit-responsible.png';
import BenefitAudit from '../resources/benefit-audit.png';
import BenefitPotential from '../resources/benefit-potential.png';
import BenefitCommunity from '../resources/benefit-community.png';
import BenefitHardwareWallets from '../resources/benefit-hardware-wallets.png';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  h1 {
    font-size: 2em;
    width: 80%;
  }
  h3 {
    font-size: 1em;
  }
`;

function Card(props) {
  const { ImgUrl, title, description } = props;
  return (
    <CardContainer>
      <Img src={ImgUrl} alt="img" />
      <H1 color="#6E6E8C" bold>
        <FormattedMessage {...title} />
      </H1>
      <H3 style={{ color: '#2C2C2C' }}>
        <FormattedMessage {...description} />
      </H3>
    </CardContainer>
  );
}

export default () => (
  <Container fluid className="text-center pt-5 pb-5">
    <H1 color="#3C3C50" bold>
      <FormattedMessage {...messages.eigth_title} />
    </H1>
    <Row>
      <Col md={6} xs={12}>
        <Card
          ImgUrl={BenefitUnchangable}
          title={messages.eigth_sub_title1}
          description={messages.eigth_sub_description1}
        />
      </Col>
      <Col md={6} xs={12} className="text-center">
        <Card
          ImgUrl={BenefitControl}
          title={messages.eigth_sub_title2}
          description={messages.eigth_sub_description2}
        />
      </Col>
    </Row>
    <Row>
      <Col md={6} xs={12}>
        <Card
          ImgUrl={BenefitHonest}
          title={messages.eigth_sub_title3}
          description={messages.eigth_sub_description3}
        />
      </Col>
      <Col md={6} xs={12} className="text-center">
        <Card
          ImgUrl={BenefitResponsible}
          title={messages.eigth_sub_title4}
          description={messages.eigth_sub_description4}
        />
      </Col>
    </Row>
    <Row>
      <Col md={6} xs={12}>
        <Card
          ImgUrl={BenefitAudit}
          title={messages.eigth_sub_title5}
          description={messages.eigth_sub_description5}
        />
      </Col>
      <Col md={6} xs={12} className="text-center">
        <Card
          ImgUrl={BenefitPotential}
          title={messages.eigth_sub_title6}
          description={messages.eigth_sub_description6}
        />
      </Col>
    </Row>
    <Row>
      <Col md={6} xs={12}>
        <Card
          ImgUrl={BenefitCommunity}
          title={messages.eigth_sub_title7}
          description={messages.eigth_sub_description7}
        />
      </Col>
      <Col md={6} xs={12} className="text-center">
        <Card
          ImgUrl={BenefitHardwareWallets}
          title={messages.eigth_sub_title8}
          description={messages.eigth_sub_description8}
        />
      </Col>
    </Row>
  </Container>
);

Card.propTypes = {
  ImgUrl: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};
