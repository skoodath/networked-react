import styled from 'styled-components';
import { device } from '../styles/device';

export const NetWorkScience = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: ${({hgt}) => hgt? hgt : "100vh" };
    width: 80%;
    max-width: 1280px;
    margin:0 auto;
    @media ${device.laptop}{
      height: 100vh;
    }
`;

export const AboutNetWorkScience = styled.p`
  border-bottom: 2px solid #ffd54d;
  margin: 2rem auto 2rem;
  padding: 0 0 2rem 0;
  letter-spacing: 2px;
  line-height: 2;
  font-size: 1.1rem;
`;

/* Network Science Application Styling */

export const AppListWrap = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 0 3rem 0;
    flex-grow: 0;
    flex-wrap: wrap;
    flex-shrink: 0;
    flex-flow: 0;
    @media ${device.laptop}{
      flex-direction: row;
    }
`;
export const AppListItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    position: relative;
    @media ${device.laptop}{
      max-width: 350px;
    }

`;
export const AppCardHeaderWrap = styled.div`
    display: flex;
    flex-direction: row;
`;
export const AppCardHeader = styled.h4`
      display: flex;
      align-items: center;
      width: 80%;
      font-size: 1.1rem;
      margin: 0 0 0 2rem;
`;
export const AppImageWrapper = styled.div`
    width: 42px;
    height: 42px;
    background: #ffe54d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img{
      width: 80%;
      height: 80%;
      display: block;
    }
`;

export const AppCardDetails = styled.div`
    padding: 0.5rem;
`;
