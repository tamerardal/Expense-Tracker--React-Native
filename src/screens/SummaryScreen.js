import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

import Summary from '../components/Summary/Summary';

let transactionData = [];

const widthAndHeight = 350;
const series = [40, 60];
const sliceColor = ['#ff6347', '#008000'];

const SummaryScreen = ({route}) => {
  if (route.params === undefined) {
    return (
      <SafeAreaView>
        <Summary
          series={series}
          widthAndHeight={widthAndHeight}
          sliceColor={sliceColor}
        />
      </SafeAreaView>
    );
  } else {
    console.log(route.params);
    const {transactions} = route.params;
    transactionData.push(transactions);
    let sum = 0;
    transactionData.forEach(x => {
      let price = parseInt(x.price, 10);
      console.log(price);
      sum += price;
    });
    console.log(sum);
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.totalContainer}>
            <Text style={styles.incomeTitle}>Toplam Gelir:{sum} ₺</Text>
            <Text style={styles.expenseTitle}>Toplam Gider:{sum} ₺</Text>
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
        <View style={styles.container}>
          <Text style={styles.mostExpTit}>
            En fazla harcama yapılan kategori:{' '}
          </Text>
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
  mostExpTit: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default SummaryScreen;
