import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    width: 4rem;
    height: 4rem;
    color: #03243C;
    background: #ffd54d;
    padding: 2rem;
    margin: 0;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 100%;
    position: relative;
    div{
      position: absolute;
      width: 28%;
      height: 28%;
      top: 37%;
      left: 32%;
      border-top: 5px solid #fff;
      border-right: 5px solid #fff;
      border-left: 7px solid transparent;
      border-bottom: 7px solid transparent;
      transform: rotate(45deg);
      background: #ffd54d;
    }
`;

const LearnMore = () => {
    return (
        <Button>
            <div></div>
        </Button>
    )
}

export default LearnMore;
