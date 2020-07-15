import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import Bar from 'components/Bar';
import H1 from 'components/H1';
import H3 from 'components/H3';
import HexTech from '../resources/blockchain_technology.png';
import messages from '../messages';

const StyledContainer = styled(Container)`
  &&& {
    padding: 10em 5em;
    background-color: #f6f8fc;
  }
`;

const StyledH3 = styled(H3)`
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

const StyledBar = styled(Bar)`
  margin: 3em 0;
`;

export default () => (
  <StyledContainer fluid>
    <Row>
      <Col lg={6} md={12}>
        <H1 color="#3C3C50" bold>
          <FormattedMessage {...messages.seventh_title} />
        </H1>
        <StyledBar />
        <StyledH3>
          <FormattedMessage {...messages.seventh_description1} />
        </StyledH3>
        <StyledH3>
          <FormattedMessage {...messages.seventh_description2} />
        </StyledH3>
      </Col>
      <Col lg={6} md={12} className="text-center">
        <Img src={HexTech} alt="hexwork" className="w-100" />
      </Col>
    </Row>
  </StyledContainer>
);
