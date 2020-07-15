import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import H1 from 'components/H1';
import Bar from 'components/Bar';
import H3 from 'components/H3';
import messages from '../messages';

const VideoWrapper = styled(Row)`
  margin-top: 2em;
`;

const H3Style = {
  fontWeight: 'lighter',
  fontSize: '1em',
  marginTop: '1em',
};

const StyledContainer = styled(Container)`
  &&& {
    background-color: #f6f8fc;
    padding: 5em;
  }
`;

const MoreButton = styled.div`
  width: 100%;
  border: 2px solid #6e6e8c;
  border-radius: 1em;
  text-transform: uppercase;
  margin-top: 4em;
  padding: 1em 0;
  user-select: none;
  box-shadow: 0 5px #999;
  cursor: pointer;
  h3 {
    margin: 0;
  }
  &:hover {
    background-color: #fbfbfb;
  }
  &:active {
    background-color: #fbfbfb;
    box-shadow: 0 2px #666;
    transform: translateY(4px);
  }
`;

function ViewMoreButton() {
  return (
    <MoreButton>
      <H3 color="#6e6e8c">
        <FormattedMessage {...messages.hex_video_view_more} />
      </H3>
    </MoreButton>
  );
}

export default () => (
  <StyledContainer fluid className="text-center">
    <Row className="flex-column align-items-center">
      <H1 color="#3C3C50" bold>
        <FormattedMessage {...messages.hex_video_title} />
      </H1>
      <Bar />
      <H3 style={{ fontWeight: 'lighter' }}>
        <FormattedMessage {...messages.hex_video_description} />
      </H3>
    </Row>
    <VideoWrapper>
      <Col xl={6} lg={12} align="left" className="text-center">
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        <H3 style={H3Style}>
          <FormattedMessage {...messages.hex_video1_description} />
        </H3>
      </Col>
      <Col xl={6} lg={12} align="right" className="text-center">
        <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        <H3 style={H3Style}>
          <FormattedMessage {...messages.hex_video2_description} />
        </H3>
      </Col>
    </VideoWrapper>
    <ViewMoreButton />
  </StyledContainer>
);
