import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const Register = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M24.09 24.04H.11V.06h23.98z"/>
      <path d="M18.58 24h-13a2.5 2.5 0 0 1-2.49-2.5v-19A2.5 2.5 0 0 1 5.58.06h13a2.5 2.5 0 0 1 2.49 2.5v19A2.5 2.5 0 0 1 18.58 24zm-13-22a.5.5 0 0 0-.5.5v19a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-19a.5.5 0 0 0-.5-.5z"/>
      <path d="M16.78 19.57a1 1 0 0 1-.71-.29L14.81 18a1 1 0 0 1 0-1.42l5.79-5.79a1 1 0 0 1 .71-.3 1 1 0 0 1 .71.3l1.26 1.26a1 1 0 0 1 0 1.41l-5.8 5.8a1 1 0 0 1-.7.31z"/>
      <path d="M15.06 20a1 1 0 0 1-.71-.29 1 1 0 0 1-.26-1l.46-1.72a1 1 0 0 1 1.67-.45l1.26 1.27a1 1 0 0 1 .26 1 1 1 0 0 1-.71.71l-1.72.48a1.07 1.07 0 0 1-.25 0z"/>
      <path d="M15.06 19.03l.45-1.72 1.27 1.26-1.72.46zM16.82 12.2H7.27l7.47-7.47a1.22 1.22 0 0 1 1.33-.26 1.21 1.21 0 0 1 .75 1.12zm-4.37-2.14h2.23V7.82z"/>
    </Base>
  );
};

Register.propTypes = {
  style: TObject,
};

export default Register;
