import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  layoutContainer: {
    paddingHorizontal: 0,
  },
  header: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  editContainer: {
    alignItems: 'flex-end',
  },
  edit: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    padding: 8,
    backgroundColor: '#20212410',
    borderWidth: 1,
    borderColor: '#202124',
    borderRadius: 8,
  },
  editTxt: {
    fontSize: 14,
    color: '#202124',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 16,
  },
  cancel: {
    backgroundColor: '#eeeeee',
  },
  save: {
    backgroundColor: '#202421',
    color: '#eeeeee',
  },
  saveTxt: {
    fontSize: 14,
    color: '#eeeeee',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    backgroundColor: '#202124',
    padding: 16,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageTxt: {
    color: '#eeeeee',
    fontSize: 40,
    fontWeight: 'normal',
    fontStyle: 'normal',
    textTransform: 'uppercase',
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    color: '#202124',
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  inputContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exit: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#d32f2f',
    backgroundColor: '#d32f2f10',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    marginHorizontal: 16,
  },
  exitTxt: {
    color: '#d32f2f',
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
