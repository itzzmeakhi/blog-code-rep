import React from 'react';

import './QtyBtn.css';

const QtyBtn = ({ children, ...otherProps }) => {
  return (
    <button
      id='qtyBtn'
      {...otherProps}>
      {children}
    </button>
  );
}

export default QtyBtn;