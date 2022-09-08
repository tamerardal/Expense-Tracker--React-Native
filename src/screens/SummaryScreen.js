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

    return (
      <SafeAreaView>
        <Summary
          series={series}
          widthAndHeight={widthAndHeight}
          sliceColor={sliceColor}
        />
      </SafeAreaView>
    );
  }
};

export default SummaryScreen;
