import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Row, Col, Container } from 'react-bootstrap';
import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Img from 'components/Img';
import messages from '../messages';
import HEX from '../resources/HEX.png';
import ETH from '../resources/ETH.png';
import BTC from '../resources/Bitcoin.png';

const StyledContainer = styled.div`
  background-color: #f6f8fc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const CardContainer = styled(Container)`
  &&& {
    max-width: 400px;
    height: 443px;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 50px 0;
    &:active {
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
    }
  }
`;

const StyledSpan = styled.span`
  text-align: center;
  margin-top: 16px;
  h2 {
    line-height: 1em;
  }
  h1 {
    letter-spacing: 0.1em;
  }
`;

const DescriptionWrapper = styled.div`
  margin: 20px 20%;
`;

function Card({ img, coinMsg, times, years }) {
  return (
    <CardContainer className="mb-4">
      <Img src={img} alt="card" />
      <StyledSpan>
        <H2 color="#6E6E8C" bold>
          <FormattedMessage {...coinMsg} />
        </H2>
        <H2 color="#6E6E8C" bold>
          <FormattedMessage {...messages.price_up} />
        </H2>
      </StyledSpan>
      <StyledSpan>
        <H1 color="#3C3C50" bold>
          {times}
        </H1>
        <H2 color="#6E6E8C" bold>
          <FormattedMessage {...years} />
        </H2>
      </StyledSpan>
    </CardContainer>
  );
}

export default () => (
  <StyledContainer>
    <H1 color="#3C3C50" bold style={{ marginBottom: '3em' }}>
      <FormattedMessage {...messages.hex_get_started} />
    </H1>
    <Container>
      <Row>
        <Col lg={12} xl={4}>
          <Card
            img={BTC}
            coinMsg={messages.btc}
            times="2,000,000x"
            years={messages.seven_years}
          />
        </Col>
        <Col lg={12} xl={4}>
          <Card
            img={ETH}
            coinMsg={messages.eth}
            times="10,633x"
            years={messages.in_2half_years}
          />
        </Col>
        <Col lg={12} xl={4}>
          <Card
            img={HEX}
            coinMsg={messages.hex}
            times="115x"
            years={messages.in_128_days}
          />
        </Col>
      </Row>
    </Container>
    <DescriptionWrapper>
      <H3
        color="#3c3c50"
        style={{ fontWeight: 'light', textAlign: 'center', fontSize: '1.4em' }}
      >
        <FormattedMessage {...messages.third_block_desc1} />
      </H3>
      <H3
        color="#3c3c50"
        style={{ fontWeight: 'light', textAlign: 'center', fontSize: '1.4em' }}
      >
        <FormattedMessage {...messages.third_block_desc2} />
      </H3>
    </DescriptionWrapper>
  </StyledContainer>
);

Card.propTypes = {
  img: PropTypes.node.isRequired,
  coinMsg: PropTypes.object,
  times: PropTypes.string.isRequired,
  years: PropTypes.object.isRequired,
};
