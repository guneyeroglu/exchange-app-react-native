import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    width: width * 0.5 - 24, // 24 = 16 + 8
    minHeight: 150,
    borderRadius: 8,
    position: 'relative',
    marginTop: 35,
    paddingVertical: 8,
  },
  containerIcon: {
    position: 'absolute',
    top: -35,
    left: -5,
  },
  containerTitle: {
    fontSize: 24,
    textAlign: 'center',
    color: colors.white,
  },
  containerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: colors.white,
    marginTop: 12,
  },
  moneyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    paddingBottom: 8,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
  },
});
