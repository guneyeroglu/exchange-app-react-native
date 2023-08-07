import React from 'react';
import { Path, Svg } from 'react-native-svg';

export const CancelIcon = ({ size, color = '#202124' }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19.71 5.71004L18.29 4.29004L12 10.59L5.71004 4.29004L4.29004 5.71004L10.59 12L4.29004 18.29L5.71004 19.71L12 13.41L18.29 19.71L19.71 18.29L13.41 12L19.71 5.71004Z'
      fill={color}
    />
  </Svg>
);
