import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const Visa = (props) => {
  return (
    <Base {...props}>
      <path fill="none" d="M-.05-.01h24v24h-24z"/>
      <path
        d="M19.15 0H4.65a2.5 2.5 0 0 0-2.5 2.5v19a2.5 2.5 0 0 0 2.5 2.5h14.5a2.5 2.5 0 0 0 2.5-2.5v-19a2.5 2.5 0 0 0-2.5-2.5zm.5 21.5a.5.5 0 0 1-.5.5H4.65a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 .5-.5h14.5a.5.5 0 0 1 .5.5z"
      />
      <path
        d="M8.23 15.93h.7v4.06h-.7zM12.32 18.82l-1.81-2.89H9.8v4.06h.71v-2.88l1.81 2.88h.7v-4.06h-.7v2.89zM13.49 16.5h1.25v3.49h.7V16.5h1.26v-.57h-3.21v.57zM11.9 3.24A5.75 5.75 0 1 0 17.65 9a5.76 5.76 0 0 0-5.75-5.76zm0 1.89a8.55 8.55 0 0 1 .9 1.61H11a9.19 9.19 0 0 1 .9-1.61zM7.72 9.74A4.54 4.54 0 0 1 7.65 9a4.65 4.65 0 0 1 .07-.75H9a6.58 6.58 0 0 0-.06.9v.6zm.58 1.5h1a7.24 7.24 0 0 0 .61 1.48 4.29 4.29 0 0 1-1.61-1.48zm1.1-4.5H8.3a4.27 4.27 0 0 1 1.83-1.61 10.5 10.5 0 0 0-.73 1.61zM11.9 13a5.44 5.44 0 0 1-1.07-1.78H13A5.44 5.44 0 0 1 11.9 13zm1.4-3.28h-2.8a5.74 5.74 0 0 1 0-.6 5.29 5.29 0 0 1 .08-.9h2.7a5.29 5.29 0 0 1 .08.9 5.74 5.74 0 0 1-.06.62zm2.2-3h-1.1a9.62 9.62 0 0 0-.73-1.61 4.27 4.27 0 0 1 1.83 1.63zm-1.57 6a6.72 6.72 0 0 0 .61-1.48h1a4.29 4.29 0 0 1-1.61 1.48zM16.15 9a4.54 4.54 0 0 1-.07.75h-1.27v-.6a6.58 6.58 0 0 0-.06-.9h1.31a4.65 4.65 0 0 1 .09.75z"
      />
    </Base>
  );
};

Visa.propTypes = {
  style: TObject,
};

export default Visa;