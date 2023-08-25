import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  layoutContainer: {
    paddingHorizontal: 0,
  },
  header: {
    margin: 16,
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
    backgroundColor: colors.white_e0,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
  },
  editTxt: {
    fontSize: 14,
    color: colors.black,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  buttonContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 16,
  },
  cancel: {
    backgroundColor: colors.white,
  },
  save: {
    backgroundColor: colors.black,
    color: colors.white,
  },
  saveTxt: {
    fontSize: 14,
    color: colors.white,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    backgroundColor: colors.black,
    padding: 16,
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageTxt: {
    color: colors.white,
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
    color: colors.black,
    fontSize: 24,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  subtitle: {
    color: colors.black,
    fontSize: 14,
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
    borderColor: colors.error,
    backgroundColor: colors.error_10,
    borderRadius: 8,
    padding: 8,
    marginTop: 16,
    marginHorizontal: 16,
  },
  exitTxt: {
    color: colors.error,
    fontSize: 16,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genderButton: {
    borderWidth: 1,
    borderColor: colors.black,
    width: width / 3 - 16,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderButtonActive: {
    backgroundColor: colors.white_e0,
  },
  genderTxt: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
});
