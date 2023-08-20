import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { colors } from '../variables/colors';

export const CloseCircleIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z'
      stroke={color}
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <Path d='M14.1215 9.87866L9.87891 14.1213' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
    <Path d='M9.87842 9.87866L14.1211 14.1213' stroke={color} strokeWidth='1.5' strokeLinecap='round' />
  </Svg>
);
