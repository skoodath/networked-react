import styled from 'styled-components';
import underline from '../../illustrations/underline.png';

export const HeaderBig = styled.h2`
  font-weight: 700;
  text-transform: ${({textcase}) => !textcase? 'none': textcase};
  font-size: 3rem;
  letter-spacing: 3px;
  padding: 0;
  position: relative;
  visibility: hidden;
  margin: 0 0 2rem 0;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    background: url(${underline});
    background-repeat: no-repeat;
    background-position-x: left;
    background-position-y: bottom;
  }
`;
export const HeaderSmall = styled.h2`
    font-weight: normal;
    display: block;
    visibility: hidden;
    margin: 0 0 -1rem 0;
`;