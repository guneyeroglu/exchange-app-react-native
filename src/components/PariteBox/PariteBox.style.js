import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#202124',
    borderRadius: 8,
    padding: 8,
    gap: 32,
  },
  iconContainer: {
    position: 'relative',
  },
  secondIcon: {
    position: 'absolute',
    left: 10,
  },
  title: {
    color: '#eeeeee',
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  subtitle: {
    fontSize: 14,
    color: '#eeeeee',
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: 8,
  },
});
