import React from 'react';
import {SafeAreaView} from 'react-native';

import Summary from '../components/Summary/Summary';

let transactionData = [];

const widthAndHeight = 350;
const sliceColor = ['#b22222', '#008000'];

const SummaryScreen = ({route}) => {
  if (route.params === undefined) {
    const series = [60, 40];
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
    const {transactions} = route.params;
    transactionData.push(transactions);
    let expsum = 0;
    let incsum = 0;
    transactionData.forEach(x => {
      let price = parseInt(x.price, 10);
      console.log(price);
      if (x.isIncome === true) {
        incsum += price;
      } else {
        expsum += price;
      }
    });

    function modeString(array) {
      if (array.length === 0) {
        return null;
      }

      var modeMap = {},
        maxEl = array[0],
        maxCount = 1;

      for (var i = 0; i < array.length; i++) {
        var el = array[i];

        if (modeMap[el] == null) {
          modeMap[el] = 1;
        } else {
          modeMap[el]++;
        }

        if (modeMap[el] > maxCount) {
          maxEl = el;
          maxCount = modeMap[el];
        } else if (modeMap[el] == maxCount) {
          maxEl += '&' + el;
          maxCount = modeMap[el];
        }
      }
      return maxEl;
    }

    let kira = transactionData.forEach(x => {
      console.log(x.value);
      modeString(x.value);
    });

    console.log(kira);

    const series = [];
    series.push(expsum, incsum);
    return (
      <SafeAreaView>
        <Summary
          expsum={expsum}
          incsum={incsum}
          kira={kira}
          series={series}
          sliceColor={sliceColor}
          widthAndHeight={widthAndHeight}
        />
      </SafeAreaView>
    );
  }
};

export default SummaryScreen;
