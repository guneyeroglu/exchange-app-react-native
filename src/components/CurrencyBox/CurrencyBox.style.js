import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 4,
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
    borderWidth: 1,
    borderColor: '#202124',
    borderRadius: 44,
    resizeMode: 'cover',
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
