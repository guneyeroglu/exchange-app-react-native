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
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  leftIcon: {
    position: 'absolute',
    top: 6,
    left: 0,
  },
  rightIcon: {
    position: 'absolute',
    top: 6,
    right: 0,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
    paddingVertical: 8,
    paddingHorizontal: 24,
    fontSize: 14,
    color: '#202124',
    fontWeight: 'normal',
    fontStyle: 'normal',
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
});
