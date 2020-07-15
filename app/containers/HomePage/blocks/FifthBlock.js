import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Bar from 'components/Bar';
import FifthBK from '../resources/fifth_bk.png';
import messages from '../messages';

const StyledTextWrapper = styled.div`
  position: absolute;
  top: 5em;
  left: 5em;
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export default () => (
  <Container fluid className="p-0 position-relative">
    <Img src={FifthBK} alt="backround" style={{ width: '100%' }} />
    <StyledTextWrapper>
      <H1 bold>
        <FormattedMessage {...messages.fifth_title} />
      </H1>
      <Bar />
      <H3
        style={{
          color: 'white',
          fontWeight: 'lighter',
          fontSize: '1rem',
          lineHeight: '1.5em',
        }}
      >
        <FormattedMessage {...messages.fifth_description1} />
      </H3>
      <H3
        style={{
          color: 'white',
          fontWeight: 'lighter',
          fontSize: '1rem',
          lineHeight: '1.5em',
        }}
      >
        <FormattedMessage {...messages.fifth_description2} />
      </H3>
    </StyledTextWrapper>
  </Container>
);
