import React from 'react';
import { Copy } from '../../styles/footerstyle';

const Copywrite = () => {
    return (
      <div>
        <Copy>&copy; {new Date().getFullYear()} networkED. All rights reserved</Copy>
      </div>
    );
}

export default Copywrite;
