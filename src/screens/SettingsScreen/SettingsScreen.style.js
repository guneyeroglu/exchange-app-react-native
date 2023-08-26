import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  layout: {
    paddingHorizontal: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 16,
  },
  listContainer: {
    flex: 1,
  },
  list: {
    marginBottom: 48,
  },
  listReset: {
    marginBottom: 0,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: colors.error,
    backgroundColor: colors.error_10,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    marginHorizontal: 16,
  },
  exitTxt: {
    color: colors.error,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  equalButton: {
    flex: 1,
    backgroundColor: colors.black,
  },
  equalButtonText: {
    color: colors.white,
  },
});
