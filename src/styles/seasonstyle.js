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
    padding: 0;
    @media ${device.laptop}{
      height: ${({ hgt }) => hgt? hgt: '100vh'};
    }
`;

/* Season One styled */

export const SeasonOneContainer = styled.div`
display: flex;
flex-direction: column;
padding: 0;
img{
  width: 100px;
}
`;

export const SeasonOneWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${device.laptop}{
    max-width: 800px;
  }
`;

export const StyledSluethPara1 = styled.p`
  margin-top: ${({ margintop}) => margintop? '2rem': 0};
  margin-bottom: 2rem;
  margin-left: 0;
  margin-right: auto;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 150px;
  background-color: #ffd54d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  visibility: hidden;
  @media ${device.laptop}{
    font-size: 0.85rem;
    max-width: 400px;
  }
  &::after{
    position: absolute;
    content: '';
    width: 1px;
    height: 1px;
    border-top: 30px solid #ffd54d;
    border-right: 30px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid transparent;
    bottom: -25px;
    left: 20%;
    transform: skewX(-35deg);
  }
`;
export const StyledSluethPara2 = styled.p`
  margin-top:  0;
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: 0;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 150px;
  background-color: #ffd54d;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  visibility: hidden;
  @media ${device.laptop}{
    font-size: 0.85rem;
    max-width: 400px;
  }
  &::after{
    position: absolute;
    content: '';
    width: 1px;
    height: 1px;
    border-top: 30px solid #ffd54d;
    border-right: 30px solid transparent;
    border-bottom: 12px solid transparent;
    border-left: 12px solid transparent;
    bottom: -25px;
    right: 20%;
    transform: skewX(-135deg);
  }
`;

export const ClosingPara = styled.p`
  margin: 0 auto;
  padding: 1rem;
  letter-spacing: normal;
  line-height: 1.6;
  border-radius: 50%;
  border: 2px solid #ffd54d;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  @media ${device.laptop}{
    font-size: 0.9rem;
  }

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
  align-items: flex-start;
  padding: 0;
`;

export const NameYearText = styled.h2`
    margin: 0;
    font-size: 1.3rem;
    font-weight: 500;
`;

/* Season Title styles */

export const UpcomingSeasonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  @media ${device.laptop}{
    flex-direction: row;
  }
`;

export const UpcomingSeasonsCard = styled.div`
  display: flex;
  margin: 0 0 3rem 0;
  align-items: center;
  width: 100%;
  position: relative;
  @media ${device.laptop}{
    margin: 0 2rem 0 0;
  }
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
  font-size: 1.1rem;
  @media ${device.laptop} {
    font-size: 1rem;
  }
`;