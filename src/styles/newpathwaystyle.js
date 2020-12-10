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
    margin: 0;
    position: relative;
    @media ${device.laptop}{
        margin: 0 auto;
        width: 100%;
        max-width: 1000px;
        justify-content: center;
        align-items: center;
    }
`;

export const PathwayImgWrap = styled.div`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    margin: 0 0 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    background-color: #ffd54d;
    //border: 1px solid #bcbcbc;
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
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: 5px solid #272727;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        color: #272727;
        position: absolute;
        left: -13px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        z-index: 1;

    `;
export const PathwayListItem = styled.li`
    list-style: none;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0 0 2rem 0;
    padding: 0;
    font-size: 0.8rem;
    background-color: #ffffff;

    &:last-child{
        &::before{
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        background-color: #fff;
        top: 75%;
        left: 0;
        }
        &::after{
            height: 0;
            width: 0;
        }
    }
    &::before{
        content: '';
        position: absolute;
        height: 82%;
        width: 1px;
        background-color: #bcbcbc;
        top: 75%;
        left: 0;
        z-index: 1;
    }

    @media ${device.laptop}{
        max-width: 500px;
        justify-content: center;
        align-items: center;
        &:nth-child(odd){
            flex-direction: column-reverse;
            margin: 0 auto 2rem 0;
            
            ${PathwayCount}{
                top: 50%;
                left: 100%;
                transform: translate(-50%, -50%);
                &::after{
                    content: '';
                    position: absolute;
                    width: 50px;
                    left: -200%;
                    height: 1px;
                    background-color: #272727;
                    top: 50%;
                }
            }
            &::before{
                left: 100%;
            }

        }
        &:nth-child(even){
            flex-direction: column-reverse;
            margin: 0 0 2rem auto;
            
            ${PathwayCount}{
                top: 50%;
                left: 0;
                transform: translate(-50%, -50%);
                &::after{
                    content: '';
                    position: absolute;
                    width: 50px;
                    right: -200%;
                    height: 1px;
                    background-color: #272727;
                    top: 50%;
                }
            }

        }
    }
        
`;

/* export const PathwayImgWrap = styled.div`
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    margin: 0 0 0 auto;
    justify-content: center;
    align-items: center;
    padding: 0;
    position: relative;
    background-color: #fff;
    border: 1px solid #bcbcbc;
    @media ${device.laptop}{
        width: 70px;
        height: 70px;
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
`;

export const PathwayCount = styled.span`
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: 5px solid #ffd54f;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        font-weight: bold;
        color: #03243C;
        position: absolute;
        left: -13px;
        top: 50%;
        transform: translateY(-50%);
        background-color: #fff;
        box-shadow: 0 0 1px 1px #bcbcbc;
        z-index: 1;
        @media ${device.laptop}{
            left: 50%;
            transform: translate(-50%, -50%);
        }
`;*/
