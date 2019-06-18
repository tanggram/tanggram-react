import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const Call = (props) => {
  return (
    <Base {...props}>
      <path d="M17.53 22.11a10 10 0 0 1-7.06-2.92l-5.63-5.63A10.33 10.33 0 0 1 2 7.29 7.85 7.85 0 0 1 4 .83a2.71 2.71 0 0 1 3.82 0l2.41 2.41a2.7 2.7 0 0 1 0 3.82l-1.2 1.2a.71.71 0 0 0 0 1L14.79 15a.71.71 0 0 0 1 0l1.2-1.2a2.71 2.71 0 0 1 3.82 0l2.4 2.41a2.69 2.69 0 0 1 0 3.82 8 8 0 0 1-5.68 2.08zM5.94 2a.7.7 0 0 0-.5.21A5.88 5.88 0 0 0 4 7.1a8.48 8.48 0 0 0 2.29 5.05l5.64 5.63c3 3 7.8 2.91 9.9.81a.72.72 0 0 0 0-1l-2.4-2.4a.7.7 0 0 0-1 0l-1.2 1.2a2.71 2.71 0 0 1-3.82 0l-5.76-5.73a2.69 2.69 0 0 1 0-3.82l1.19-1.19a.7.7 0 0 0 0-1l-2.41-2.4A.67.67 0 0 0 5.94 2z"/>
      <path fill="none" d="M.01.01h23.98v23.98H.01z"/>
    </Base>
  );
};

Call.propTypes = {
  style: TObject,
};

export default Call;
