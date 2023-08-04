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
    width: 32,
    height: 32,
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
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    fontStyle: 'normal',
  },
  name: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'italic',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#202124',
    width: '100%',
    height: '100%',
    maxWidth: 100,
    marginLeft: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: '#202124',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
