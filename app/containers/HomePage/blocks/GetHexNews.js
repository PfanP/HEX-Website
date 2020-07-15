import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';

import Bar from 'components/Bar';
import H1 from 'components/H1';
import H3 from 'components/H3';
import messages from '../messages';

const StyledContainer = styled.div`
  background-color: #f6f8fc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 100px 0;
  form {
    height: 100%;
    .email-input {
      border: 1px solid #6e6e8c;
      width: 30%;
      border-radius: 10px;
      height: 100%;
      margin-right: 10px;
      background-color: #f6f8fc;
    }
    .sign-up-button {
      background-color: #9200ff;
      border-radius: 10px;
      color: white;
      text-transform: uppercase;
      height: 100%;
      padding: 0 40px;
      border: none;
    }
  }
`;

const SignUpContainer = styled.div`
  width: 100%;
  text-align: center;
  height: 50px;
`;

function SignUp() {
  const placeholder = 'Sign Up';
  return (
    <SignUpContainer>
      <form>
        <input className="email-input" placeholder={placeholder} />
        <input type="submit" className="sign-up-button" />
      </form>
    </SignUpContainer>
  );
}

const IntlSignup = injectIntl(SignUp);

export default function() {
  return (
    <StyledContainer>
      <H1 bold color="black">
        <FormattedMessage {...messages.get_hex_news_title} />
      </H1>
      <Bar />
      <H3>
        <FormattedMessage
          style={{ color: '#3C3C50', fontWeight: 'lighter' }}
          {...messages.get_hex_news_description}
        />
      </H3>
      <IntlSignup />
    </StyledContainer>
  );
}
