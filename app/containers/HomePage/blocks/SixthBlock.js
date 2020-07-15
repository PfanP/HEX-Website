import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import Bar from 'components/Bar';
import H1 from 'components/H1';
import H3 from 'components/H3';
import { ButtonWithArrow } from 'components/Button';
import HexWork from '../resources/hex-work.png';
import messages from '../messages';

const StyledContainer = styled(Container)`
  &&& {
    padding: 10em 5em;
  }
`;

const StyledH3 = styled(H3)`
  font-size: 1.5em;
  letter-spacing: 0.05em;
`;

const StyledBar = styled(Bar)`
  margin: 3em 0;
`;

const StyledButtonWrapper = styled.div`
  margin-top: 5em;
`;

export default () => (
  <StyledContainer fluid>
    <Row>
      <Col lg={6} md={12}>
        <H1 color="#3C3C50" bold>
          <FormattedMessage {...messages.sixth_title} />
        </H1>
        <StyledBar />
        <StyledH3>
          <FormattedMessage {...messages.sixth_description1} />
        </StyledH3>
        <StyledH3>
          <FormattedMessage {...messages.sixth_description2} />
        </StyledH3>
        <StyledH3>
          <FormattedMessage {...messages.sixth_description3} />
        </StyledH3>
        <StyledButtonWrapper>
          <ButtonWithArrow title={messages.get_hex_title} />
        </StyledButtonWrapper>
      </Col>
      <Col lg={6} md={12} className="text-center">
        <Img src={HexWork} alt="hexwork" className="w-100" />
      </Col>
    </Row>
  </StyledContainer>
);
