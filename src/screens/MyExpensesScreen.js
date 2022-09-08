import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

let transactionData = [];
const MyExpenses = ({route}) => {
  if (route.params === undefined) {
    return null;
  } else {
    const widthAndHeight = 350;
    const series = [123, 321];
    const sliceColor = ['#ff6347', '#008000'];
    console.log(route.params);
    const {transactions} = route.params;
    transactionData.push(transactions);

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.totalContainer}>
            <Text style={styles.incomeTitle}>Toplam Gelir: ₺</Text>
            <Text style={styles.expenseTitle}>Toplam Gider: ₺</Text>
            <Text />
          </View>
        </View>
        <View style={styles.piecontainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
            style={styles.piechart}
          />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
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
  seperator: {
    borderWidth: 0.2,
    borderColor: 'gray',
    marginRight: 10,
    marginLeft: 10,
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
    color: 'tomato',
  },
  piechart: {
    marginTop: 10,
    marginBottom: 10,
  },
});

export default MyExpenses;
