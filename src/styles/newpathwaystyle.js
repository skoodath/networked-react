import styled from 'styled-components';
import {device } from './device';

export const PathwayWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 3rem 0 0 0;
`;

export const PathwayList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    max-width: 400px;
    @media ${device.laptop}{
        margin: 0 auto;
        max-width: 800px;
    }
    @media ${device.laptopLG}{
        margin: 0 auto;
        max-width: 960px;
    }
`;

export const PathwayImgWrap = styled.div`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    background-color: #03243C15;
    border: 2px solid #03243C;
    @media ${device.laptop}{
        width: 70px;
        height: 70px;
        margin: 0;
    }

`;

export const PathwayImg = styled.img`
    display: block;
    height: 70%;
`;

export const PathwayText = styled.p`
    padding: 0;
    height: 100%;
    display: flex;
    margin: 0 auto 0 1.5rem;
    letter-spacing: normal;
    font-weight: 500;
    position: relative;
    @media ${device.laptop}{
        margin: 1rem 0 0 0;
    }
`;

export const PathwayCount = styled.span`
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 50%;
        box-shadow: 0 0 0 3px #03243C,
                    0 0 0 4px #fff,
                    0 0 0 8px #fff,
                    0 0 0 5px #03243C;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        color: #03243C;
        position: absolute;
        background-color: #fff;
        z-index: 1;

    `;
export const PathwayListItem = styled.li`
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 2rem 1rem;
    font-size: 0.8rem;
    background-color: #ffffff;
    position: relative;
    &:nth-child(odd){
        border-top: 3px solid transparent;
        border-left: 3px solid #03243C50;
        border-bottom: 3px solid #03243C50;
        border-radius: 0 0 0 30px;
        &::after{
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            background-color: transparent;
            bottom: 1px;
            right: 0;
            transform: translate(-10px, 11px);
            border-left: 10px solid #03243C;
            border-right: 8px solid transparent;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            z-index: 3;
        }
        ${PathwayCount}{
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
        }
    }
    &:nth-child(even){
        border-top: 3px solid transparent;
        border-right: 3px solid #03243C50;
        border-bottom: 3px solid #03243C50;
        border-radius: 0 0 30px 0;
        flex-direction: row-reverse;
        &::after{
            content: '';
            position: absolute;
            width: 1px;
            height: 1px;
            background-color: transparent;
            bottom: 1px;
            left: 0;
            transform: translate(10px, 11px);
            border-right: 10px solid #03243C;
            border-left: 8px solid transparent;
            border-top: 8px solid transparent;
            border-bottom: 8px solid transparent;
            z-index: 3;
        }
        ${PathwayCount}{
          right: 0;
          top: 0;
          transform: translate(50%, -50%);
        }
    }
    &:last-child{
        &::after{
        content: '';
        position: absolute;
        width: 1rem;
        height: 1rem;
        box-shadow: 0 0 0 3px #03243C,
                    0 0 0 8px #fff,
                    0 0 0 8px #fff,
                    0 0 0 5px #03243C;
        background-color: #fff;
        border: none;
        bottom: 0;
        left: 0;
        border-radius: 50%;
        transform: translate(50%, 50%);
        }
    }


    @media ${device.laptop}{
        max-width: 400px;
        padding: 1.1rem 0.5rem;
        &:nth-child(odd){
          border-top: 3px solid #03243C50;
          border-left: 3px solid #03243C50;
          border-right: none;
          border-bottom: 3px solid #03243C50;
          border-radius: 30px 0 0 30px;
          flex-direction: column-reverse;
          margin: 0 auto 0 0;
          &::after{
            transform: translate(-5px, 11px);
          }
        ${PathwayCount}{
          left: 100%;
          top: 0;
          transform: translate(-50%, -50%);
        }
    }
        &:nth-child(even){
            border-top: 3px solid #03243C50;
            border-left: 3px solid transparent;
            border-right: 3px solid #03243C50;
            border-bottom: 3px solid #03243C50;
            border-radius: 0 30px 30px 0;
            flex-direction: column-reverse;
            margin: 0 0 0 auto;
            &::after{
                transform: translate(5px, 11px);
            }
        ${PathwayCount}{
            right: 100%;
            top: 0;
            transform: translate(50%, -50%);
          }
        }
        &:last-child{
        &::after{
            transform: translate(-50%, 50%);
        }
    }
    }
    @media ${device.laptopLG}{
        max-width: 480px;
        padding: 1.1rem 0.5rem;
        &:nth-child(odd){
          border-top: 3px solid #03243C50;
          border-left: 3px solid #03243C50;
          border-right: none;
          border-bottom: 3px solid #03243C50;
          border-radius: 30px 0 0 30px;
          flex-direction: column-reverse;
          margin: 0 auto 0 0;
          &::after{
            transform: translate(-10px, 11px);
          }
        ${PathwayCount}{
          left: 100%;
          top: 0;
          transform: translate(-50%, -50%);
        }
    }
        &:nth-child(even){
            border-top: 3px solid #03243C50;
            border-left: 3px solid transparent;
            border-right: 3px solid #03243C50;
            border-bottom: 3px solid #03243C50;
            border-radius: 0 30px 30px 0;
            flex-direction: column-reverse;
            margin: 0 0 0 auto;
            &::after{
                transform: translate(10px, 11px);
            }
        ${PathwayCount}{
            right: 100%;
            top: 0;
            transform: translate(50%, -50%);
          }
        }
        &:last-child{
        &::after{
            transform: translate(-50%, 50%);
        }
    }
    }
        
`;

