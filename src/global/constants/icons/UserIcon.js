import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../variables/colors';

export const UserIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
