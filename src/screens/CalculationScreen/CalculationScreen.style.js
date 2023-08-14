import { StyleSheet, Dimensions } from 'react-native';

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
    marginBottom: 8,
    paddingBottom: 8,
    paddingHorizontal: 16 + 4,
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
  },
  localIcon: {
    width: 32,
    height: 32,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#202124',
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
    color: '#202124',
  },
  localTypeSubtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: '#202124',
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
    color: '#202124',
  },
  localInfoMoney: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: '#202124',
  },
  currencyContainer: {
    paddingHorizontal: 16,
  },
});
