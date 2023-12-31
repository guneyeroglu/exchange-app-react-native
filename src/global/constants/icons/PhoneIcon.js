import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { colors } from '../variables/colors';

export const PhoneIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M16.0127 0H7.98756C6.61459 0 5.49756 1.11694 5.49756 2.49005V21.51C5.49756 22.8829 6.61459 24 7.98756 24H16.0127C17.3858 24 18.5028 22.8829 18.5028 21.5101V2.49005C18.5028 1.11694 17.3858 0 16.0127 0ZM12.0002 22.5292C11.4438 22.5292 10.9911 22.0764 10.9911 21.5201C10.9911 20.9637 11.4437 20.5111 12.0002 20.5111C12.5565 20.5111 13.0092 20.9637 13.0092 21.5201C13.0092 22.0764 12.5565 22.5292 12.0002 22.5292ZM17.0287 3.15333V19.0981H6.97164V3.15333H17.0287Z'
      fill={color}
    />
  </Svg>
);
