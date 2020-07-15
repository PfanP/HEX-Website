import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import Bar from 'components/Bar';
import H3 from 'components/H3';
import { ButtonWithArrow } from 'components/Button';

import messages from '../messages';

const StyledContainer = styled(Container)`
  padding: 4em;
`;

const CardContainer = styled.div`
  background: ${props => props.bkColor};
  width: 100%;
  height: 550px;
  border-radius: 20px;
  padding: 105px 40px 40px 40px;
  display: flex;
  line-height: 3em;
  flex-direction: column;
  text-align: left;
  margin-top: 2em;
  @media (max-width: 1500px) {
    padding: 105px 20px 40px 20px;
  }
`;

const CardTitleContainer = styled.div`
  border-bottom: 2px solid white;
  flex: 1;
  font-weight: bold;
  font-size: 2.5em;
  color: white;
`;

const DescriptionContainer = styled.div`
  flex: 2;
  font-weight: lighter;
  font-size: 1.5em;
  line-height: 30px;
  text-align: left;
  color: #fff;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function Card(props) {
  const { bkColor, title, description } = props;
  return (
    <CardContainer bkColor={bkColor}>
      <CardTitleContainer>
        <FormattedMessage {...title} />
      </CardTitleContainer>
      <DescriptionContainer>
        <FormattedMessage {...description} />
        <ButtonWithArrow title={messages.get_hex_title} bkMode="transparent" />
      </DescriptionContainer>
    </CardContainer>
  );
}

export default () => (
  <StyledContainer fluid className="text-center">
    <H1 bold color="black">
      <FormattedMessage {...messages.get_hex_title} />
    </H1>
    <Bar />
    <H3 style={{ fontWeight: 'lighter' }}>
      <FormattedMessage {...messages.get_hex_description} />
    </H3>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Card
          bkColor="linear-gradient(#e58e2f 0%, #ffdc32 100%);"
          title={messages.get_hex_card1_title}
          description={messages.get_hex_card1_description}
        />
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Card
          bkColor="linear-gradient(#db2d72 0%, #f932fc 100%);"
          title={messages.get_hex_card2_title}
          description={messages.get_hex_card2_description}
        />
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Card
          bkColor="linear-gradient(#8b06fc 0%, #a457ff 100%);"
          title={messages.get_hex_card3_title}
          description={messages.get_hex_card3_description}
        />
      </Col>
      <Col sm={12} md={6} lg={4} xl={3}>
        <Card
          bkColor="linear-gradient(#ffbd40 0%,#f00 100%);"
          title={messages.get_hex_card4_title}
          description={messages.get_hex_card4_description}
        />
      </Col>
    </Row>
  </StyledContainer>
);

Card.propTypes = {
  bkColor: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};
