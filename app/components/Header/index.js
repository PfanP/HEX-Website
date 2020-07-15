import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import Button from 'components/Button';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Logo from './logo.png';
import messages from './messages';

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 233.55px;
    height: 83.66px;
  }
`;

const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

function Header() {
  return (
    <NavBar>
      <ImageWrapper>
        <Img src={Logo} alt="react-boilerplate - Logo" />
      </ImageWrapper>
      <MenuWrapper>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/videos">
          <FormattedMessage {...messages.videos} />
        </HeaderLink>
        <HeaderLink to="/faqs">
          <FormattedMessage {...messages.faqs} />
        </HeaderLink>
        <HeaderLink to="/more">
          <FormattedMessage {...messages.more} />
        </HeaderLink>
        <Button>
          <FormattedMessage {...messages.gethex} />
        </Button>
      </MenuWrapper>
    </NavBar>
  );
}

export default Header;
