import React from 'react';
import {TObject} from '@tanggram/react-core/prop_types';
import Base from './Base';

const PrivacyPolicy = (props) => {
  return (
    <Base {...props}>
      <path d="M12 23.51h-.16c-.69-.06-5.9-.74-8.8-7.56-1.58-3.73-1-9.33-1-9.57a1 1 0 0 1 .84-.88 14.27 14.27 0 0 0 5-1.79C10.46 1.87 11 1 11 .83A1 1 0 0 1 12 0a1 1 0 0 1 1 .8c.07.15.54 1 3.14 2.89a13.9 13.9 0 0 0 5 1.79 1 1 0 0 1 .84.89c0 .24.55 5.82-1 9.55-3 7.21-8.63 7.57-8.87 7.59zM4 7.3c-.09 1.58-.17 5.32.9 7.85 2.52 5.93 6.9 6.33 7.14 6.35.63-.06 4.73-.71 7.06-6.34 1-2.53 1-6.27.89-7.85a14.41 14.41 0 0 1-5.05-2 18.53 18.53 0 0 1-3-2.49 18.17 18.17 0 0 1-2.86 2.49A14.45 14.45 0 0 1 4 7.3zM11 1zm0 0zm0 0zm2 0zm0 0zm0 0zm0-.18z"/>
      <path id="Stroke-1" d="M16.75 16.17H6.19l8.93-8.93a.94.94 0 0 1 1-.21 1 1 0 0 1 .59.88zm-6.94-1.5h5.44V9.23z"/>
    </Base>
  );
};

PrivacyPolicy.propTypes = {
  style: TObject,
};

export default PrivacyPolicy;
