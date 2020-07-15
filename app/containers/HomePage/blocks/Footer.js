import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from '../messages';
const Container = styled.div`
  background-color: #17171f;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`;
export default function() {
  return (
    <Container>
      <div>
        <FormattedMessage {...messages.footer_rights} />
      </div>
      <div>
        <FormattedMessage {...messages.footer_disclaimer} /> |{' '}
        <FormattedMessage {...messages.footer_team} />
      </div>
    </Container>
  );
}
