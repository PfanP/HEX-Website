import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3em;
  margin-bottom: 0.25em;
  color: ${props => (props.color ? props.color : 'white')};
  font-weight: ${props => (props.bold ? 'bold' : 'lighter')};
  line-height: normal;
`;

export default H1;
