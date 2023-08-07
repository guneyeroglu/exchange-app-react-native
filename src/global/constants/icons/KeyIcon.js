import React from 'react';
import { Path, Svg } from 'react-native-svg';

export const KeyIcon = ({ size, color = '#202124' }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      fill={color}
      d='M12.3212 10.6852L4 19L6 21M7 16L9 18M20 7.5C20 9.98528 17.9853 12 15.5 12C13.0147 12 11 9.98528 11 7.5C11 5.01472 13.0147 3 15.5 3C17.9853 3 20 5.01472 20 7.5Z'
      stroke='#000000'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);