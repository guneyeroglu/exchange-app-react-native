import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
