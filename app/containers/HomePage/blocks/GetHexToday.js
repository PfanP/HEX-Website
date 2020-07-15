import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import H1 from 'components/H1';
import H3 from 'components/H3';
import { ButtonWithArrow } from 'components/Button';
import messages from '../messages';
import Background from '../resources/get-HEX-today-bk.png';

const Container = styled.div`
  .bk-img {
    width: 100%;
  }
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 400px;
`;

const ContentWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 900px;
  height: 100%;
  margin: auto;
`;

export default () => (
  <Container>
    <ContentWrapper>
      <H1 bold>
        <FormattedMessage {...messages.get_hex_today_title} />
      </H1>
      <H3 style={{ color: 'white', fontWeight: '300' }} className="text-center">
        <FormattedMessage {...messages.get_hex_today_description} />
      </H3>
      <ButtonWithArrow title={messages.get_hex_title} />
    </ContentWrapper>
    <Img className="bk-img" src={Background} alt="background" />
  </Container>
);
