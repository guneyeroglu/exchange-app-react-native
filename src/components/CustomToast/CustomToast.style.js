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
    color: '#eeeeee',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  success: {
    backgroundColor: '#388e3c',
  },
  error: {
    backgroundColor: '#d32f2f',
  },
  warning: {
    backgroundColor: '#ffa000',
  },
  info: {
    backgroundColor: '#1976d2',
  },
});
