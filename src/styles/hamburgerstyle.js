import styled from 'styled-components';

/* export const Hamburger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0 2rem;
  cursor: pointer;
  z-index: 9999;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  @media ${device.laptop}{
        display: none;
      }
  &::before {
    position: absolute;
    content: "";
    top: ${({ open }) => (open ? "30px" : "20px")};
    right: 0;
    width: ${({ open }) => (open ? "40px" : "30px")};
    height: 3px;
    border-radius: 10px;
    background: #03243C;
    transform-origin: center;
    transform: ${({ open }) => (open ? "rotate(-135deg)" : "rotate(0)")};
    transition: all 0.5s;
    mix-blend-mode: difference;
  }
  &::after {
    position: absolute;
    content: "";
    top: 30px;
    right: 0;
    width: 40px;
    height: 3px;
    background: #03243C;
    border-radius: 10px;
    transform-origin: center;
    transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    transition: all 0.5s;
  }
  &:hover{
    &::before{
      width: 40px;
    }
    &::after{
      width: 40px;
    }
  }
`; */

export const HamburgerNew = styled.div`
  position: fixed;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;
  z-index: 9999;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 2px #aaa;
  transition-property: box-shadow;
  transition-duration: 0.5s;
  &:hover{
    box-shadow: 0 0 5px #ffd54d;
  }
`;

export const HamburgerNewItemsOne = styled.span`
  background: #03243C;
  display: inline-block;
  position: relative;
  height: 0.22rem;
  margin: 3px;
  width: 50%;
  border-radius: 10px;
  transition-property: width, border-radius, height, transform, position, background-color;
  transition-duration: 0.5s;
  transform-origin: top left;
  transform: ${({ open }) => (open ? "translateX(0.3rem)" : "translateX(0)")};
  ${HamburgerNew}:hover & {
      position: absolute;
      transform: translateX(10px);
      border-radius: 50%;
      height: 0.43rem;
      width: 0.43rem;
      background: #ffd54d;
    }

`;
export const HamburgerNewItemsTwo = styled.span`
  background: #03243C;
  display: inline-block;
  position: relative;
  height: 0.22rem;
  margin: 3px;
  width: 50%;
  border-radius: 10px;
  transition-property: width, border-radius, height, transform, position, background-color;
  transition-duration: 0.5s;
  transform-origin: top left;
  transform: ${({ open }) => (open ? "translateX(-0.3rem)" : "translateX(0)")};
  ${HamburgerNew}:hover & {
      position: absolute;
      transform: translateX(-10px);
      border-radius: 50%;
      height: 0.43rem;
      width: 0.43rem;
      background: #ffd54d;
    }

`;

  