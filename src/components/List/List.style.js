import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  titleBox: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white_e0,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 'bold',
    opacity: 0.5,
    color: colors.black,
  },
  contentButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: colors.white_80,
    borderBottomWidth: 1,
    borderBottomColor: colors.white_e0,
  },
  contentText: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: colors.black,
  },
});
