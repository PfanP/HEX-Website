import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 2em;
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: ${props => (props.bold ? 'bold' : 300)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : '2px'};
  margin: 0;
`;

export default H2;
