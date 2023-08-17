import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

const { width } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    maxWidth: width - 64,
    width: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 10,
    backgroundColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  containerText: {
    fontSize: 14,
    color: colors.white,
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  success: {
    backgroundColor: colors.success,
  },
  error: {
    backgroundColor: colors.error,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  info: {
    backgroundColor: colors.info,
  },
});
