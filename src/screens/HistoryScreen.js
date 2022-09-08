import React from 'react';
import {SafeAreaView, View, FlatList, Text, StyleSheet} from 'react-native';
import TransactionCard from '../components/TransactionCard/TransactionCard';

let transactionData = [];

const HistoryScreen = ({route}) => {
  if (route.params === undefined) {
    return null;
  } else {
    const {transactions} = route.params;
    transactionData.push(transactions);

    const renderTransactions = ({item}) => (
      <TransactionCard transaction={item} />
    );
    const renderKey = item => item.id.toString();
    const renderSeperator = () => <View style={styles.seperator} />;

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <FlatList
            data={transactionData}
            renderItem={renderTransactions}
            keyExtractor={renderKey}
            ItemSeparatorComponent={renderSeperator}
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
});

export default HistoryScreen;
