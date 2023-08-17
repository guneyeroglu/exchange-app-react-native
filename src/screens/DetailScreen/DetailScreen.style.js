import { StyleSheet } from 'react-native';
import { colors } from '../../global/constants/variables/colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: colors.black,
  },
  headerIcon: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 44,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.black,
    padding: 8,
    borderRadius: 8,
    marginBottom: 4,
  },
  tableHeadTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#eeeeee',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    backgroundColor: colors.black_45,
    borderRadius: 8,
    marginBottom: 4,
  },
  tableSecondRow: {
    backgroundColor: colors.black_75,
  },
  tableRowTxt: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: colors.black,
    flex: 1,
  },
  firstTxt: {
    textAlign: 'left',
  },
  middleTxt: {
    textAlign: 'center',
  },
  lastTxt: {
    textAlign: 'right',
  },
});
