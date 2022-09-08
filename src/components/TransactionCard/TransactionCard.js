import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './TransactionCard.styles';

const TransactionCard = ({transaction}) => {
  const iconSize = 34;
  const iconFunc = ({valueName}) => {
    let iconName;
    let colorName;
    switch (iconName) {
      case valueName === 'Kira':
        iconName = 'home';
        colorName = 'indianred';
        break;

      default:
        break;
    }
    return <Icon name={iconName} size={iconSize} color={colorName} />;
  };

  return (
    <View style={styles.cardContainer} key={transaction}>
      <View style={styles.innerContainer}>
        <Text style={{fontSize: 12, width: 105}} numberOfLines={1}>
          {transaction.date.toString()}
        </Text>
        <Text style={styles.title}>{transaction.value}</Text>
        <Text
          style={{
            fontSize: 12,
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
          <Icon name={'home'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Market' && (
          <Icon name={'cart-variant'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Fatura' && (
          <Icon name={'file'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Eğlence' && (
          <Icon name={'glass-cocktail'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Giyim' && (
          <Icon name={'tshirt-crew'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Ulaşım' && (
          <Icon name={'bus'} size={iconSize} color="indianred" />
        )}
        {transaction.value === 'Diğer' && (
          <Icon
            name={'language-javascript'}
            size={iconSize}
            color="indianred"
          />
        )}
        {transaction.value === 'Maaş' && (
          <Icon name={'cash-multiple'} size={iconSize} color="green" />
        )}
        {transaction.value === 'Ek Gelir' && (
          <Icon name={'cash'} size={iconSize} color="green" />
        )}
      </View>
    </View>
  );
};

export default TransactionCard;
