import styled from 'styled-components';
import {device } from './device';

export const PathwayWrap = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 3rem 0 0 0;
    @media ${device.laptop} {
        height: 50%;
        &::before{
            content: '';
            position: absolute;
            width: 2px;
            height: 100%;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            background-color: #ffd54d;
        }
    }
`;

export const PathwayList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 840px;
    height: 100%;
    border: none;
    margin: 0 0 0 1rem;
    position: relative;
    @media ${device.laptop}{
        margin: 0 auto;
        width: 70%;
    }
`;
export const PathwayListItem = styled.li`
    list-style: none;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* border: 3px solid #ffd54d;
    border-left: ${({borderleft}) => borderleft? 'none': '3px solid #ffd54d'};
    border-right: ${({borderright}) => borderright? 'none': '3px solid #ffd54d'};
    border-bottom: ${({borderbottom}) => borderbottom? 'none': '3px solid #ffd54d'}; */
    border-radius: 5px;
    box-shadow: 0 0 3px 1px #ddd;
    align-items: center;
    width: 100%;
    max-width: 350px;
    margin: 0 0 3rem 0;
    font-size: 0.8rem;
    span{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid #03243C;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        color: #fff;
        background-color: #03243C;
        position: absolute;
        top: 0;
        left: 0;
        margin: 1rem 0 0 1rem;
    }
    &:last-child{
        margin: 0;
        &::after{
            border: none;
        }
    }
    &:nth-child(odd){
        @media ${device.laptop}{
            margin: 0 auto 0 0;
            &::after{
            border-top: 10px solid transparent;
            border-right: 10px solid #ffd54d;
            border-bottom: 10px solid transparent;
            border-left: 10px solid transparent;
            box-shadow: 0 2px 5px 2px #fff;
            top: 50%;
            left: 420px;
            bottom: 0;
            margin: 0 0 0 -21px;
            transform: translateY(-50%);
            }
        }
    }
    &:nth-child(even){
        @media ${device.laptop}{
        margin: 0 0 0 auto;
            &::after{
            border-top: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid #ffd54d;
            box-shadow: 0 2px 5px 2px #fff;
            top: 50%;
            left: -59px;
            bottom: 0;
            margin: 0 0 0 -11px;
            transform: translateY(-50%);
            }
        }
    }
    &::after{
        position: absolute;
        content: '';
        width: 1px;
        height: 1px;
        border-top: 10px solid #ffd54d;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        bottom: -20%;
        left: 50%;
        transform: translateX(-50%);

    }
    @media ${device.laptop}{
        min-width: 350px;
        }

`;

export const PathwayImgWrap = styled.div`
    display: block;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 1rem;
    @media ${device.laptop}{
        height: 130px;
    }

`;
export const PathwayImg = styled.img`
    display: block;
    height: 95%;
`;

export const PathwayText = styled.p`
    padding: 0.5rem;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0 0 2rem 0;
    letter-spacing: normal;
    font-weight: 700;

`;

export const PathwayCount = styled.span`
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 3px solid #03243C;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        color: #fff;
        background-color: #03243C;
        position: absolute;
        top: 0;
        left: 0;
        margin: 1rem 0 0 1rem;
`;
