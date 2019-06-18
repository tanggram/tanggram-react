import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const Payment = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M.07.07h23.86v23.86H.07z"/>
      <path d="M22.44 12.24V9.7a2.21 2.21 0 0 0-2.21-2.21h-2.95V4.05a2.48 2.48 0 0 0-2.48-2.48H4.05a2.48 2.48 0 0 0-2.49 2.48V20a2.48 2.48 0 0 0 2.49 2.48h16.18a2.21 2.21 0 0 0 2.21-2.21v-2.59a1.24 1.24 0 0 0 .91-1.19v-3.06a1.25 1.25 0 0 0-.91-1.19zM7.69 3.55h7.11a.51.51 0 0 1 .5.5v3.44H7.69zm-2 4a2.21 2.21 0 0 0-1.9 2.15v10.69a.5.5 0 0 1-.24-.39V4.05a.5.5 0 0 1 .5-.5H5.7zm14.76 12.68a.22.22 0 0 1-.22.22H6a.22.22 0 0 1-.22-.22V9.7A.22.22 0 0 1 6 9.48h14.23a.22.22 0 0 1 .22.22v2.49h-3.83a1.25 1.25 0 0 0-1.25 1.24v3.06a1.24 1.24 0 0 0 1.25 1.24h3.83zm1.4-4h-5v-2.55h5z"/>
      <path d="M20.59 15.77a.81.81 0 1 0-.81-.81.81.81 0 0 0 .81.81z"/>
    </Base>
  );
};

Payment.propTypes = {
  style: TObject,
};

export default Payment;
