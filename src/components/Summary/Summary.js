import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

import styles from './Summary.styles';

const Summary = ({widthAndHeight, series, sliceColor}) => {
  return (
    <View>
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
      <View style={styles.container}>
        <Text style={styles.mostExpTit}>
          En fazla harcama yapılan kategori:{' '}
        </Text>
      </View>
    </View>
  );
};

export default Summary;
