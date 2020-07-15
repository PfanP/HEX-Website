/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'components/Img';
import { FormattedMessage } from 'react-intl';

import A from './A';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';
import Arrow from './resource/arrow.png';

const StyledButtonWithArrow = styled.div`
  width: 261.05px;
  height: 78.1px;
  background: ${props =>
    props.bkMode === 'transparent' ? 'transparent' : '#9200ff'};
  border: ${props =>
    props.bkMode === 'transparent' ? '2px solid white' : 'none'};
  border-radius: 100em;
  color: white;
  display: flex;
  padding: 0 0.5em;
  justify-content: space-between;
  align-items: center;
  color: white;
  span {
    font-weight: bold;
    font-size: 1.5rem;
    padding-left: 1em;
    text-transform: uppercase;
  }
`;

function ButtonWithArrow(props) {
  const { title, bkMode } = props;
  return (
    <StyledButtonWithArrow bkMode={bkMode}>
      <FormattedMessage {...title} />
      <Img src={Arrow} alt="arrow" />
    </StyledButtonWithArrow>
  );
}

function Button(props) {
  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.handleRoute) {
    button = (
      <StyledButton onClick={props.handleRoute}>
        {Children.toArray(props.children)}
      </StyledButton>
    );
  }

  return <Wrapper>{button}</Wrapper>;
}

Button.propTypes = {
  handleRoute: PropTypes.func,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

ButtonWithArrow.propTypes = {
  title: PropTypes.object,
  bkMode: PropTypes.string,
};
export { ButtonWithArrow };
export default Button;
