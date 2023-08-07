import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inputContainer: {},
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
    paddingVertical: 8,
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#202124',
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  leftPadding: {
    paddingLeft: 24,
  },
  rightPadding: {
    paddingRight: 24,
  },
  leftIcon: {
    position: 'absolute',
    top: 6,
    left: 0,
  },
  rightIcon: {
    position: 'absolute',
    top: 6,
    right: 0,
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
  hint: {
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
