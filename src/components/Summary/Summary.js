import React from 'react';
import {ScrollView} from 'react-native';
import {Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

import styles from './Summary.styles';

const SummaryExpensesCard = ({title, adet, tl}) => {
  if (adet === undefined || adet === 0) {
    return null;
  } else {
    console.log(adet);
    return (
      <View style={styles.container}>
        <Text style={styles.mostExpTit}>
          Bu ay {title} kategorisinde {adet} adet,
        </Text>
        <Text style={styles.mostExpTit}>
          toplam ₺{tl} değerinde harcama yaptınız.
        </Text>
      </View>
    );
  }
};

const Summary = ({
  widthAndHeight,
  series,
  sliceColor,
  incsum,
  expsum,
  kira,
  market,
  fatura,
  eglence,
  giyim,
  ulasim,
  diger,
  kiratl,
  eglencetl,
  giyimtl,
  digertl,
  ulasimtl,
  faturatl,
  markettl,
}) => {
  return (
    <ScrollView>
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
        <SummaryExpensesCard adet={kira} title="Kira" tl={kiratl} />
        <SummaryExpensesCard adet={market} title="Market" tl={markettl} />
        <SummaryExpensesCard adet={fatura} title="Fatura" tl={faturatl} />
        <SummaryExpensesCard adet={giyim} title="Giyim" tl={giyimtl} />
        <SummaryExpensesCard adet={eglence} title="Eglence" tl={eglencetl} />
        <SummaryExpensesCard adet={ulasim} title="Ulaşım" tl={ulasimtl} />
        <SummaryExpensesCard adet={diger} title="Diğer" tl={digertl} />
      </View>
    </ScrollView>
  );
};

export default Summary;
