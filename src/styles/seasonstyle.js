import styled from 'styled-components';
import { device } from '../styles/device';

/* About Seasons Style */
export const AboutSeasons = styled.section`
    position: relative;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: ${({ hgt }) => hgt? hgt: '100vh'};
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    @media ${device.laptop}{
      height: 100vh;
    }
    img{
    width: 100px;
  }
`;

export const AboutSeasonItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-self: center;
    position: relative;
    width: 100%;
    max-width: 1280px;
    height: 320px;
    margin: 0 auto;
    overflow: hidden;
    .swiper-button-prev{
        left: 0;
        height: 2rem;
        color: #03243C;
    }
    .swiper-button-next{
        right: 0;
        height: 2rem;
        color: #03243C;
    }
`;

/* Season One styled */

export const SeasonOneContainer = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 0;
`;

export const StyledSluethPara = styled.p`
margin: 2rem auto;
border-bottom: 2px solid #ffd54d;
padding: 0 0 2rem 0;
letter-spacing: 2px;
line-height: 2;
font-size: 1.1rem;
`;

export const SeasonOneHeader = styled.h2`
font-size: 1.6rem;
justify-self: space-around;
`;

/* Season Title styles */

export const SeasonText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
`;

export const NameYearText = styled.h2`
    margin: 0 0 1rem;
    font-size: 1.3rem;
`;
export const SeasonOneSubTitle = styled.h3`
  font-size: 1.2rem;
`;

/* Season Title styles */

export const UpcomingSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  @media ${device.laptop}{
    flex-direction: row;
  }
`;

export const UpcomingSeasonsCard = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;
  width: 100%;
  position: relative;
  &::before{
    position: absolute;
    content: '';
    background: #ffd54e;
    height: 100%;
    width: 5px;
    border-radius: 20px;
    left: 0;
  }
`;
export const UpcomingImageWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  margin: 0 1rem;
  img{
    width: 95%;
  }
`;
export const UpcomingSeasonHeader = styled.h3`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
  font-size: 1.2rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;