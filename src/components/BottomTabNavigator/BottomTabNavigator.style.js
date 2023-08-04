import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingBottom: 8,
    paddingTop: 16,
  },
  button: {
    width: width / 5,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
