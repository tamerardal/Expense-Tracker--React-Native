import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 5,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    elevation: 1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  piecontainer: {
    margin: 5,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    elevation: 1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 5,
    marginRight: 5,
  },
  incomeTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: 'green',
  },
  expenseTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#cd5c5c',
  },
  piechart: {
    marginTop: 10,
    marginBottom: 10,
  },
  mostExpTit: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
