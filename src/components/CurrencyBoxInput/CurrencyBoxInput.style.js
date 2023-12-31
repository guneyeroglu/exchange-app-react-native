import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 16,
    borderWidth: 1,
    borderColor: colors.black,
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
    color: colors.black,
  },
  name: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'italic',
    color: colors.black,
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
    color: colors.black,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.black,
    width: '100%',
    height: '100%',
    maxWidth: 100,
    marginLeft: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    color: colors.black,
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textAlign: 'right',
  },
});
