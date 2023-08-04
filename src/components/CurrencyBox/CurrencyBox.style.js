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
    marginRight: 4,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
  infoContainer: {
    flex: 1,
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
