import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: 8,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 16,
  },
  naming: {
    flex: 1,
  },
  symbol: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    fontStyle: 'normal',
  },
  name: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  info: {
    flexDirection: 'row',
    gap: 16,
  },
  infoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
