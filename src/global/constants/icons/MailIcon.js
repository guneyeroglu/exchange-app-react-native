import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { colors } from '../variables/colors';

export const MailIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7'
      stroke={color}
      strokeWidth='1.75'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z'
      stroke={color}
      strokeWidth='1.75'
      strokeLinecap='round'
    />
  </Svg>
);
