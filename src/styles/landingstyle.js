import styled from 'styled-components';


export const Styledlanding = styled.section`
  height: 100vh;
  background: #ffd54d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: relative;

`;

export const Styledheader = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-weight: ${({ boldness }) => boldness};
  font-size: ${({ mysize }) => mysize};
  text-transform: ${({ textt }) => textt};
  display: block;

`;