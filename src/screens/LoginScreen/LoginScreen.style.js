import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
    paddingTop: height / 10,
    backgroundColor: '#eeeeee',
  },
  mainLogo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    padding: 16,
  },
  title: {
    color: '#202124',
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
    backgroundColor: '#202124',
    width: 200,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: '#eeeeee',
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
    color: '#202124',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  footerLink: {
    color: '#202124',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginLeft: 8,
  },
});
