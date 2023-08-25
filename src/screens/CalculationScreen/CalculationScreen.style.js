import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  localContainer: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    paddingBottom: 8,
    paddingHorizontal: 16 + 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  localIcon: {
    width: 32,
    height: 32,
    marginRight: 16,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  localType: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 16,
    gap: 8,
  },
  localTypeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: colors.black,
  },
  localTypeSubtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: colors.black,
  },
  localInfoContainer: {
    width: width / 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  localInfo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 14,
  },
  localInfoText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: colors.black,
  },
  localInfoMoney: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: colors.black,
  },
  currencyContainer: {
    paddingHorizontal: 16,
  },
});
