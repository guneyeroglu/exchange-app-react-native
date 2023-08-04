import React from 'react';
import { Path, Svg } from 'react-native-svg';

export const BackIcon = ({ size, color = '#202124' }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 128 128' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path d='M48.1002 29.1L13.2002 64L48.1002 98.9L53.8002 93.2L28.5002 68H92.0002V60H28.5002L53.8002 34.8L48.1002 29.1Z' fill={color} />
    <Path d='M112 60H104V68H112V60Z' fill={color} />
  </Svg>
);
