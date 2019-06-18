import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const Voucher = (props) => {
  return (
    <Base {...props}>
      <path d="M21.47 21H2.52A2.51 2.51 0 0 1 0 18.5v-5.95h1a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5H0V5.5A2.51 2.51 0 0 1 2.52 3h19A2.5 2.5 0 0 1 24 5.5v6h-1a.51.51 0 0 0-.49.5.49.49 0 0 0 .49.5h1v6a2.5 2.5 0 0 1-2.53 2.5zM2 14.35v4.15a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5v-4.23a2.5 2.5 0 0 1 0-4.55V5.5a.5.5 0 0 0-.5-.5H2.52a.5.5 0 0 0-.5.5v4.26a2.51 2.51 0 0 1 0 4.59z"/><path d="M6.997 15.973L16 6.97l1.06 1.06-9.001 9.002zM14.56 17.79a2.25 2.25 0 1 1 2.25-2.25 2.25 2.25 0 0 1-2.25 2.25zm0-3a.75.75 0 1 0 .75.75.75.75 0 0 0-.75-.75zM9.48 10.71a2.25 2.25 0 1 1 2.25-2.25 2.25 2.25 0 0 1-2.25 2.25zm0-3a.75.75 0 0 0 0 1.5.75.75 0 0 0 0-1.5z"/>
    </Base>
  );
};

Voucher.propTypes = {
  style: TObject,
};

export default Voucher;
