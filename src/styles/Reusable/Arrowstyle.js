import styled from 'styled-components';

export const PathwayIntro = styled.div`
z-index: 99;
width: 100%;
background: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const MySpan = styled.span`
  font-size: ${({ spansize }) => spansize? spansize : '1rem'};
  cursor: pointer;
  display: block;
`;

export const ArrowWrap = styled.div`
width: 5rem;
height: 5rem;
border-radius: 50%;
background: #ffd54d;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
svg{
    fill: #fff;
    font-size: 3rem;
}
`;