import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Img from 'components/Img';
import H1 from 'components/H1';
import H3 from 'components/H3';
import Bar from 'components/Bar';
import { ButtonWithArrow } from 'components/Button';
import messages from '../messages';
import Background from '../resources/FAQs-background.png';

const Container = styled.div`
  .bk-img {
    width: 100%;
  }
  position: relative;
  display: flex;
  justify-content: center;
  /* max-height: 500px; */
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
  padding: 50px 0;
`;

export default () => (
  <Container>
    <ContentWrapper>
      <H1 bold>
        <FormattedMessage {...messages.faqs_title} />
      </H1>
      <Bar />
      <H3 style={{ color: 'white' }} className="text-center">
        <FormattedMessage {...messages.faqs_description} />
      </H3>
      <ButtonWithArrow
        bkMode="transparent"
        title={messages.faqs_go_to_button}
      />
    </ContentWrapper>
    <Img className="bk-img" src={Background} alt="background" />
  </Container>
);
