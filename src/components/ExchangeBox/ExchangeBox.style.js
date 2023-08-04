import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#202124',
    width: width * 0.5 - 32,
    minHeight: 150,
    borderRadius: 16,
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
    color: '#eeeeee',
  },
  containerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#eeeeee',
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
    borderBottomColor: '#eeeeee',
  },
});
