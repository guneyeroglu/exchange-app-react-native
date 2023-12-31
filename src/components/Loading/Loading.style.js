import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.45,
    backgroundColor: colors.black,
  },
  icon: {
    width: 48 + 16, // +16 like padding
    height: 48 + 16, // +16 like padding
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
