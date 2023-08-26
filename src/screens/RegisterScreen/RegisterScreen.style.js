import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    paddingTop: height / 10,
    backgroundColor: colors.white,
  },
  mainLogo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    margin: 16,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginVertical: 16,
    backgroundColor: colors.black,
    width: 200,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  footerLink: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginLeft: 8,
  },
});
