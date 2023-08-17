import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  inputContainer: {},
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: colors.black,
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 14,
    color: colors.black,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  disabled: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderBottomColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
  },
  leftPadding: {
    paddingLeft: 34,
  },
  rightPadding: {
    paddingRight: 34,
  },
  leftIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
    zIndex: 1,
  },
  rightIcon: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 1,
  },
  errorBorder: {
    borderBottomColor: '#d32f2f',
    color: '#d32f2f',
  },
  messageContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
    marginLeft: 4,
    paddingRight: 20,
  },
  info: {
    color: '#2979ff',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  error: {
    color: '#d32f2f',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
