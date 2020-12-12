import styled from 'styled-components';

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 0;
  justify-content: center;
  width: 100%;
  margin: 0;
  height: ${({ hgt}) => hgt? hgt: 'auto'};
`;