import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { colors } from '../variables/colors';

export const RightArrowIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path d='M10 7L15 12L10 17' stroke={color} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </Svg>
);
