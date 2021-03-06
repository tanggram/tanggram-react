import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const GiftCard = (props) => {
  return (
    <Base {...props}>
      <path d="M21.45 3H2.55A2.48 2.48 0 0 0 .07 5.47v12.92a2.49 2.49 0 0 0 2.48 2.49h18.9a2.49 2.49 0 0 0 2.48-2.49V5.47A2.48 2.48 0 0 0 21.45 3zm.49 2.48v8.17h-9a2 2 0 0 0 .4-1 1.93 1.93 0 0 0-.56-1.52c-.82-.9-2-.91-3.23 0-.09.08-.19.15-.27.23V5h12.17a.5.5 0 0 1 .49.47zM5.46 13a.82.82 0 0 1-.38-.48.59.59 0 0 1 .18-.37.54.54 0 0 1 .41-.15 1.49 1.49 0 0 1 .83.37 2.87 2.87 0 0 1 1 1.31A4 4 0 0 1 5.46 13zm6 0a4 4 0 0 1-2 .64 2.82 2.82 0 0 1 1-1.31c.83-.62 1.13-.3 1.24-.18a.59.59 0 0 1 .18.37.82.82 0 0 1-.45.48zM2.55 5h5.18v6.44c-.1-.1-.22-.19-.34-.29-1.21-.88-2.42-.87-3.23 0a1.93 1.93 0 0 0-.56 1.52 2 2 0 0 0 .4 1H2.06v-8.2A.5.5 0 0 1 2.55 5zm-.49 13.39v-3.26h4.69L5.1 16.78a.75.75 0 0 0 1.06 1l1.57-1.58v2.64H2.55a.49.49 0 0 1-.49-.45zm19.39.5H9.23v-2.64l1.47 1.48a.75.75 0 1 0 1.05-1.06l-1.54-1.54h11.73v3.26a.49.49 0 0 1-.49.5z"/>
      <path fill="none" d="M.07 0h23.86v23.86H.07z"/>
    </Base>
  );
};

GiftCard.propTypes = {
  style: TObject,
};

export default GiftCard;
