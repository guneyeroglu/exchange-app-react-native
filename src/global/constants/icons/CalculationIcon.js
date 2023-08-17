import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { colors } from '../variables/colors';

export const CalculationIcon = ({ size, color = colors.black }) => (
  <Svg width={size ?? '48'} height={size ?? '48'} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Path
      d='M18.8438 2H5.78125C4.83125 2 4 2.83125 4 3.78125V19.2188C4 20.1688 4.83125 21 5.78125 21H18.8438C19.7938 21 20.625 20.1688 20.625 19.2188V3.78125C20.625 2.83125 19.7938 2 18.8438 2ZM8.75 18.15C8.75 18.3875 8.5125 18.625 8.275 18.625H6.85C6.6125 18.625 6.375 18.3875 6.375 18.15V16.725C6.375 16.4875 6.6125 16.25 6.85 16.25H8.275C8.5125 16.25 8.75 16.4875 8.75 16.725V18.15ZM8.75 13.4C8.75 13.6375 8.5125 13.875 8.275 13.875H6.85C6.6125 13.875 6.375 13.6375 6.375 13.4V11.975C6.375 11.7375 6.6125 11.5 6.85 11.5H8.275C8.5125 11.5 8.75 11.7375 8.75 11.975V13.4ZM13.5 18.15C13.5 18.3875 13.2625 18.625 13.025 18.625H11.6C11.3625 18.625 11.125 18.3875 11.125 18.15V16.725C11.125 16.4875 11.3625 16.25 11.6 16.25H13.025C13.2625 16.25 13.5 16.4875 13.5 16.725V18.15ZM13.5 13.4C13.5 13.6375 13.2625 13.875 13.025 13.875H11.6C11.3625 13.875 11.125 13.6375 11.125 13.4V11.975C11.125 11.7375 11.3625 11.5 11.6 11.5H13.025C13.2625 11.5 13.5 11.7375 13.5 11.975V13.4ZM18.25 18.15C18.25 18.3875 18.0125 18.625 17.775 18.625H16.35C16.1125 18.625 15.875 18.3875 15.875 18.15V11.975C15.875 11.7375 16.1125 11.5 16.35 11.5H17.775C18.0125 11.5 18.25 11.7375 18.25 11.975V18.15ZM18.25 8.65C18.25 8.8875 18.0125 9.125 17.775 9.125H6.85C6.6125 9.125 6.375 8.8875 6.375 8.65V4.85C6.375 4.6125 6.6125 4.375 6.85 4.375H17.775C18.0125 4.375 18.25 4.6125 18.25 4.85V8.65Z'
      fill={color}
    />
  </Svg>
);
