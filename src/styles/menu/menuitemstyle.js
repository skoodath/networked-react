import styled from 'styled-components';

export const Menuitems = styled.ul`
  padding: 0 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  li {
    position: relative;
    margin: 0 0 3rem 0;
    cursor: pointer;
    color: #272727;
    text-transform: uppercase;

    a{
      font-size: 2.2rem;
      position: relative;
      &::after {
      content: "";
      width: 0;
      height: 3px;
      display: block;
      background: #ffd54d;
      transition: width 0.5s;
      transition-timing-function: cubic-bezier(0.1, 0.5, 0.0065, 0.71);
      position: absolute;
      left: 0;
      }
      &:hover {
        &::after {
            width: 100%;
        }
        }
    }
  }
`;