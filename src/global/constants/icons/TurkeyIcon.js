import React from 'react';
import { Svg, Path } from 'react-native-svg';

export const TurkeyIcon = ({ size }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 300 300' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      xmlns='http://www.w3.org/2000/svg'
      d='M 290.953125 149.796875 C 290.953125 227.644531 227.847656 290.75 150 290.75 C 72.152344 290.75 9.046875 227.644531 9.046875 149.796875 C 9.046875 71.953125 72.152344 8.84375 150 8.84375 C 227.847656 8.84375 290.953125 71.953125 290.953125 149.796875 Z M 290.953125 149.796875'
      fill={'#d32f2f'}
    />
    <Path
      xmlns='http://www.w3.org/2000/svg'
      d='M 33.699219 149.804688 C 33.660156 112.128906 58.554688 78.972656 94.746094 68.492188 C 130.9375 58.015625 169.695312 72.746094 189.792969 104.617188 C 171.070312 83.742188 141.414062 76.578125 115.226562 86.601562 C 89.039062 96.625 71.746094 121.761719 71.746094 149.800781 C 71.746094 177.84375 89.039062 202.976562 115.226562 213 C 141.414062 223.023438 171.070312 215.859375 189.792969 194.988281 C 169.695312 226.855469 130.941406 241.585938 94.75 231.109375 C 58.558594 220.636719 33.664062 187.480469 33.699219 149.804688 Z M 33.699219 149.804688'
      fill={'#eeeeee'}
    />
    <Path
      xmlns='http://www.w3.org/2000/svg'
      d='M 266.300781 124.945312 L 237.082031 134.441406 L 219.011719 109.582031 L 219.011719 140.308594 L 189.792969 149.804688 L 219.011719 159.296875 L 219.011719 190.019531 L 237.082031 165.167969 L 266.296875 174.65625 L 248.242188 149.804688 Z M 266.300781 124.945312'
      fill={'#eeeeee'}
    />
  </Svg>
);