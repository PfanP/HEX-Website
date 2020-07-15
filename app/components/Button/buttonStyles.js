import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 20px;
  color: white !important;
  background-color: #9200ff;
  padding: 9px 27px;
  border-radius: 16px;
  &:active {
  }
`;

export default buttonStyles;
