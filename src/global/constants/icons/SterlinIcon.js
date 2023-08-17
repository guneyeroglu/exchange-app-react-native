import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../variables/colors';

export const SterlinIcon = ({ size, color = colors.black, stroke }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      stroke={stroke ?? color}
      strokeWidth='1'
      d='M39.0001 42C39.0001 43.6566 37.6586 45 36.0001 45H12.0001C10.8367 45 9.77639 44.3261 9.2842 43.2712C8.78911 42.2184 8.95026 40.9725 9.69436 40.0791C12.3428 36.9047 13.7987 32.9025 13.7987 28.8103V27H12.0001C10.3417 27 9.00014 25.6594 9.00014 24C9.00014 22.3406 10.3417 21 12.0001 21H13.7992V14.7469C13.7992 8.27063 19.1533 3 25.7439 3C27.0273 3 28.2986 3.20213 29.5173 3.60206L36.932 6.02925C38.5079 6.54337 39.3667 8.238 38.8511 9.813C38.3384 11.3852 36.6367 12.2486 35.0692 11.7302L27.6508 9.303C27.0283 9.10219 26.3908 9 25.7439 9C22.4626 9 19.8001 11.5781 19.8001 14.7469V21H30.0001C31.6586 21 33.0001 22.3434 33.0001 24C33.0001 25.6566 31.6586 27 30.0001 27H19.8001V28.8094C19.8001 32.3466 18.9915 35.8322 17.4676 39H36.0001C37.6595 39 39.0001 40.3406 39.0001 42Z'
      fill={color}
    />
  </Svg>
);
