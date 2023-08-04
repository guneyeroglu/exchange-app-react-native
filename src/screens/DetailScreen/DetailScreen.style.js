import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#202124',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#202124',
  },
  headerIcon: {
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#202124',
    borderRadius: 44,
  },
  content: {
    padding: 16,
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#202124',
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
    backgroundColor: '#20212445',
    borderRadius: 8,
    marginBottom: 4,
  },
  tableSecondRow: {
    backgroundColor: '#20212485',
  },
  tableRowTxt: {
    fontSize: 12,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#202124',
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
