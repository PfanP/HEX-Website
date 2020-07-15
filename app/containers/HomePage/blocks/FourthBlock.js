import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import H1 from 'components/H1';
import H3 from 'components/H3';
import Bar from 'components/Bar';
import messages from '../messages';

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 5% 20%;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1em;
  justify-content: center;
  align-items: center;

  .avg-container {
    display: flex;
    margin-top: 2em;
    .avg-rate {
      &:first-child {
        padding-right: 3em;
        border-right: 1px solid #bfbfbf;
      }
      &:nth-child(2) {
        margin-left: 3em;
      }
    }
  }
`;

const StyledH3 = styled(H3)`
  text-align: center;
  margin: 0;
`;

const AvgRateContainer = styled.div.attrs({
  className: 'avg-rate',
})`
  display: flex;
  flex-direction: column;
  color: ${props => (props.color ? props.color : 'black')};
  min-width: 215px;
  .title-with-asterisk {
    span {
      font-weight: lighter;
    }
    .asterisk {
      vertical-align: middle;
    }
  }
`;

const PercentageContainer = styled.div`
  display: flex;
  font-weight: lighter;
  .sub-container {
    display: flex;
    flex-direction: column;
    span {
      &:first-child {
        font-size: 2em;
      }
      line-height: normal;
    }
  }
  .percentage {
    font-weight: bold;
    font-size: 4em;
    line-height: 1em;
  }
`;

function AvgRate(props) {
  const { title, percentage, color } = props;
  return (
    <AvgRateContainer color={color}>
      <div className="title-with-asterisk">
        <FormattedMessage {...title} />
        <span className="asterisk">*</span>
      </div>
      <PercentageContainer>
        <span className="percentage">{percentage}</span>
        <div className="sub-container">
          <span>%</span>
          <span>p.a.</span>
        </div>
      </PercentageContainer>
    </AvgRateContainer>
  );
}

export default () => (
  <Container>
    <H1 color="#3c3c50" className="text-center">
      <FormattedMessage {...messages.fourth_title} />
    </H1>
    <Bar />
    <StyledH3>
      <FormattedMessage {...messages.fourth_description} />
    </StyledH3>
    <div className="avg-container">
      <AvgRate
        title={messages.avg_hex_rate}
        percentage={5.99}
        color="#FF00FF"
      />
      <AvgRate
        title={messages.avg_bank_rate}
        percentage={1.05}
        color="#6E6E8C"
      />
    </div>
  </Container>
);

AvgRate.propTypes = {
  title: PropTypes.object.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
