import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';

import styles from './Summary.styles';

const Summary = ({
  widthAndHeight,
  series,
  sliceColor,
  incsum,
  expsum,
  kira,
}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.totalContainer}>
          <Text style={styles.incomeTitle}>Toplam Gelir: ₺{incsum} </Text>
          <Text style={styles.expenseTitle}>Toplam Gider: ₺{expsum} </Text>
          <Text />
        </View>
      </View>
      <View style={styles.piecontainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          doughnut={true}
          coverRadius={0.3}
          coverFill={'#d3d3d3'}
          style={styles.piechart}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.mostExpTit}>
          En fazla harcama yapılan kategori:{kira}
        </Text>
      </View>
    </View>
  );
};

export default Summary;
