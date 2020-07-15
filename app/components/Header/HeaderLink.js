import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: 16px;
  color: #6e6e8c;
  font-weight: bold;
  font-size: 23px;

  &:hover {
    color: #383838;
    border-top: 5px solid #ff00ff;
    text-decoration: none;
  }
`;
