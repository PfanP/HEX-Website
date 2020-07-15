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
  background-color: white;
`;

const CardContainer = styled.div`
  background: ${props => props.bkColor};
  width: 100%;
  height: 550px;
  border-radius: 20px;
  padding: 70px 50px;
  display: flex;
  line-height: 3em;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  margin-top: 2em;
  max-width: 400px;
  max-height: 410px;
  @media (max-width: 1500px) {
    padding: 70px 50px;
  }
`;

const CardTitleContainer = styled.div`
  font-weight: bold;
  font-size: 2.5em;
  color: white;
`;

const DescriptionContainer = styled.div`
  font-weight: lighter;
  font-size: 1.5em;
  line-height: 30px;
  text-align: left;
  color: #fff;
  margin-top: 1em;
`;

function Card(props) {
  const { bkColor, title } = props;
  return (
    <CardContainer bkColor={bkColor}>
      <CardTitleContainer>
        <FormattedMessage {...title} />
      </CardTitleContainer>
      <DescriptionContainer>
        <ButtonWithArrow
          title={messages.techy_stuff_go_to_page}
          bkMode="transparent"
        />
      </DescriptionContainer>
    </CardContainer>
  );
}

export default () => (
  <StyledContainer fluid className="text-center">
    <H1 bold color="black">
      <FormattedMessage {...messages.techy_stuff_title} />
    </H1>
    <Bar />
    <H3 style={{ fontWeight: 'lighter' }}>
      <FormattedMessage {...messages.techy_stuff_description} />
    </H3>
    <Row>
      <Col sm={12} md={6} xl={4} align="center">
        <Card
          bkColor="linear-gradient(#ffdc32 0%, #e58e2f 100%);"
          title={messages.techy_stuff_card1}
        />
      </Col>
      <Col sm={12} md={6} xl={4} align="center">
        <Card
          bkColor="linear-gradient(#ffdc32 0%, #e58e2f 100%);"
          title={messages.techy_stuff_card2}
        />
      </Col>
      <Col sm={12} md={6} xl={4} align="center">
        <Card
          bkColor="linear-gradient(#ffdc32 0%, #e58e2f 100%);"
          title={messages.techy_stuff_card3}
        />
      </Col>
    </Row>
  </StyledContainer>
);

Card.propTypes = {
  bkColor: PropTypes.string.isRequired,
  title: PropTypes.object.isRequired,
};
