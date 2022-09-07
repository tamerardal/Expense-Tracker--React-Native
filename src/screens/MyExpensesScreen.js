import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

let transactionData = [];
const MyExpenses = ({route}) => {
  if (route.params === undefined) {
    return null;
  } else {
    const {transactions} = route.params;
    console.log(route);

    transactionData.push(transactions);
    console.log(transactionData);
    // let mapData = transactionData.map(e => e);
    // console.log(mapData);
    const renderTransactions = ({item}) => (
      <TransactionCard transaction={item} />
    );
    const renderKey = item => item.id.toString();
    const renderSeperator = () => <View style={styles.seperator} />;

    const iconFunc = ({transaction, color}) => {
      let iconName;

      if (transaction.value === 'Kira') {
        iconName = 'home-circle';
      }
      return <Icon name={iconName} size={20} color={color} />;
    };

    const TransactionCard = ({transaction}) => {
      return (
        <View style={styles.cardContainer} key={transaction}>
          <View style={styles.innerContainer}>
            <Text style={styles.title}>{transaction.value}</Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: transaction.isIncome ? 'green' : 'indianred',
                marginLeft: 5,
                marginBottom: 10,
              }}>
              {transaction.price} ₺
            </Text>
          </View>
          <View style={styles.iconContainer}>
            {transaction.value === 'Kira' && (
              <Icon name={'home'} size={30} color="indianred" />
            )}
            {transaction.value === 'Market' && (
              <Icon name={'cart-variant'} size={30} color="indianred" />
            )}
            {transaction.value === 'Fatura' && (
              <Icon name={'file'} size={30} color="indianred" />
            )}
            {transaction.value === 'Eğlence' && (
              <Icon name={'glass-cocktail'} size={30} color="indianred" />
            )}
            {transaction.value === 'Giyim' && (
              <Icon name={'tshirt-crew'} size={30} color="indianred" />
            )}
            {transaction.value === 'Ulaşım' && (
              <Icon name={'bus'} size={30} color="indianred" />
            )}
            {transaction.value === 'Diğer' && (
              <Icon name={'language-javascript'} size={30} color="indianred" />
            )}
            {transaction.value === 'Maaş' && (
              <Icon name={'cash-multiple'} size={30} color="green" />
            )}
            {transaction.value === 'Ek Gelir' && (
              <Icon name={'cash'} size={30} color="green" />
            )}
          </View>
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={transactionData}
          renderItem={renderTransactions}
          keyExtractor={renderKey}
          ItemSeparatorComponent={renderSeperator}
        />
        {/* <TransactionCard /> */}
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    elevation: 1,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  cardContainer: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: 'gainsboro',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginLeft: 5,
    marginTop: 5,
  },
  priceContainer: {
    justifyContent: 'flex-end',
  },
  seperator: {
    borderWidth: 0.2,
    borderColor: 'gray',
    marginRight: 10,
    marginLeft: 10,
  },
  iconContainer: {
    margin: 10,
  },
});

export default MyExpenses;
