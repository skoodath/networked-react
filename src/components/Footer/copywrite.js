import React from 'react';
import styled from 'styled-components';

const Copy = styled.article`
  color: #fff;
  padding: 1em 0;
  margin: 0 auto;
  width: 80%;
  border-top: 1px solid #4e4e4e;
`;

const Copywrite = () => {
    return (
      <div>
        <Copy>&copy; {new Date().getFullYear()} networkED. All rights reserved</Copy>
      </div>
    );
}

export default Copywrite;
