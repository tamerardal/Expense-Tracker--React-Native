import React from 'react';
import {SafeAreaView} from 'react-native';

import Summary from '../components/Summary/Summary';

let transactionData = [];

const widthAndHeight = 350;
const sliceColor = ['#b22222', '#008000', '#778899'];

const SummaryScreen = ({route}) => {
  if (route.params === undefined) {
    const series = [0, 0, 100];
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
    let kiracount = 0;
    let kiratl = 0;
    let marketcount = 0;
    let markettl = 0;
    let faturacount = 0;
    let faturatl = 0;
    let eglencecount = 0;
    let eglencetl = 0;
    let giyimcount = 0;
    let giyimtl = 0;
    let ulasimcount = 0;
    let ulasimtl = 0;
    let digercount = 0;
    let digertl = 0;
    let maas = 0;
    let ekgelir = 0;
    transactionData.forEach(x => {
      if (x.value === 'Kira') {
        kiracount += 1;
        kiratl = x.price;
      } else if (x.value === 'Market') {
        marketcount += 1;
        markettl = x.price;
      } else if (x.value === 'Fatura') {
        faturacount += 1;
        faturatl = x.price;
      } else if (x.value === 'Eğlence') {
        eglencecount += 1;
        eglencetl = x.price;
      } else if (x.value === 'Giyim') {
        giyimcount += 1;
        giyimtl = x.price;
      } else if (x.value === 'Ulaşım') {
        ulasimcount += 1;
        ulasimtl = x.price;
      } else if (x.value === 'Diğer') {
        digercount += 1;
        digertl = x.price;
      } else if (x.value === 'Maaş') {
        maas = x.price;
      } else if (x.value === 'Ek Gelir') {
        ekgelir = x.price;
      }
    });
    const series = [];
    series.push(expsum, incsum, 0);
    return (
      <SafeAreaView>
        <Summary
          expsum={expsum}
          incsum={incsum}
          series={series}
          sliceColor={sliceColor}
          widthAndHeight={widthAndHeight}
          kira={kiracount}
          market={marketcount}
          fatura={faturacount}
          eglence={eglencecount}
          giyim={giyimcount}
          ulasim={ulasimcount}
          diger={digercount}
          kiratl={kiratl}
          markettl={markettl}
          faturatl={faturatl}
          eglencetl={eglencetl}
          ulasimtl={ulasimtl}
          digertl={digertl}
          giyimtl={giyimtl}
        />
      </SafeAreaView>
    );
  }
};

export default SummaryScreen;
