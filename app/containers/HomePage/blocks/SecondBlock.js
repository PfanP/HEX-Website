import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Container } from 'react-bootstrap';

import Img from 'components/Img';
import H1 from 'components/H1';
import H2 from 'components/H2';
import Bar from 'components/Bar';
import PerformanceChart from '../resources/performance-chart.png';
import messages from '../messages';
const StyledContainer = styled(Container)`
  margin: 100px 140px;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 130px 130px 130px;
`;

export default () => (
  <StyledContainer fluid>
    <Row>
      <Col xl={6} lg={12} className="text-center">
        <Img src={PerformanceChart} alt="perform chart" className="w-100" />
      </Col>
      <Col xl={6} lg={12}>
        <TextWrapper>
          <H1 color="#3C3C50" bold className="mt-2">
            <FormattedMessage {...messages.performBanner} />
          </H1>
          <Bar />
          <H2 color="#6E6E8C" bold letterSpacing="normal" className="mb-2">
            <FormattedMessage {...messages.performBanner_sub1} />
            <br />
            <FormattedMessage {...messages.performBanner_sub2} />
          </H2>
          <H2 color="#3C3C50" bold letterSpacing="normal">
            <FormattedMessage {...messages.performBanner_sub3} />
          </H2>
        </TextWrapper>
      </Col>
    </Row>
  </StyledContainer>
);
