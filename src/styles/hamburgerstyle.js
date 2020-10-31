import styled from 'styled-components';

export const Hamburger = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 0 2rem;
  cursor: pointer;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  &::before {
    position: absolute;
    content: "";
    top: ${({ open }) => (open ? "35px" : "20px")};
    right: 0;
    width: ${({ open }) => (open ? "2.7rem" : "2rem")};
    height: 0.2rem;
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
    top: 35px;
    right: 0;
    width: 2.7rem;
    height: 0.2rem;
    background: #03243C;
    border-radius: 10px;
    transform-origin: center;
    transform: ${({ open }) => (open ? "rotate(135deg)" : "rotate(0)")};
    transition: all 0.5s;
    mix-blend-mode: difference;
  }
  &:hover{
    &::before{
      width: 2.7rem;
    }
    &::after{
      width: ${({ open }) => (open ? "2.7rem" : "2rem")};
    }
  }
`;