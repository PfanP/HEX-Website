import React from 'react';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import styled from 'styled-components';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from '../messages';
import Background from '../resources/background.png';
const Banner = styled.div`
  position: relative;
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  top: 0;
  left: 25%;
  width: 50%;
  height: 100%;
  margin: auto;
  text-align: center;
`;

export default () => (
  <Banner>
    <Img
      src={Background}
      alt="background"
      style={{ width: 'calc(100vw - 15px)', height: '100%' }}
    />
    <TextWrapper>
      <H1 color="white" bold>
        <FormattedMessage {...messages.header} />
      </H1>
      <div>
        <H2 color="white">
          <FormattedMessage {...messages.subHeader1} />
        </H2>
        <H2 color="white" bold>
          <FormattedMessage {...messages.subHeader2} />
        </H2>
      </div>
    </TextWrapper>
  </Banner>
);
