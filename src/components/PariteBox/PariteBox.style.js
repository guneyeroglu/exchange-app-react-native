import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 8,
    padding: 8,
    gap: 32,
  },
  iconContainer: {
    position: 'relative',
  },
  secondIcon: {
    position: 'absolute',
    left: 10,
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: 8,
  },
});
