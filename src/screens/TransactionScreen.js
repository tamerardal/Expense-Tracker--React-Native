import React, {useState} from 'react';
import {
  View,
  Alert,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonActions} from '@react-navigation/native';

import AddExpense from '../components/AddExpense/AddExpense';
import AddIncome from '../components/AddIncome/AddIncome';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TransactionScreen({navigation}) {
  let id = Math.random();
  const [price, setPrice] = useState(0);
  const [date, setDate] = useState(new Date());
  const [isIncome, setisIncome] = useState(false);
  const [viewMode, setViewMode] = React.useState('expense');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemsExpense, setItemsExp] = useState([
    {
      label: 'Kira',
      value: 'Kira',
      icon: () => <Icon name={'home'} size={14} color="indianred" />,
    },
    {
      label: 'Market',
      value: 'Market',
      icon: () => <Icon name={'cart-variant'} size={14} color="indianred" />,
    },
    {
      label: 'Fatura',
      value: 'Fatura',
      icon: () => <Icon name={'file'} size={14} color="indianred" />,
    },
    {
      label: 'Eğlence',
      value: 'Eğlence',
      icon: () => <Icon name={'glass-cocktail'} size={14} color="indianred" />,
    },
    {
      label: 'Giyim',
      value: 'Giyim',
      icon: () => <Icon name={'tshirt-crew'} size={14} color="indianred" />,
    },
    {
      label: 'Ulaşım',
      value: 'Ulaşım',
      icon: () => <Icon name={'bus'} size={14} color="indianred" />,
    },
    {
      label: 'Diğer',
      value: 'Diğer',
      icon: () => (
        <Icon name={'language-javascript'} size={14} color="indianred" />
      ),
    },
  ]);
  const [itemsIncome, setItemsInc] = useState([
    {
      label: 'Maaş',
      value: 'Maaş',
      icon: () => <Icon name={'cash-multiple'} size={14} color="green" />,
    },
    {
      label: 'Ek Gelir',
      value: 'Ek Gelir',
      icon: () => <Icon name={'cash'} size={14} color="green" />,
    },
  ]);

  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const transactions = {
    id,
    price,
    value,
    date,
    isIncome,
  };

  function inchandleSubmit() {
    if (!price || !value || !date) {
      Alert.alert('HATA', 'Kategori ve miktar alanı boş geçilemez.');
    } else {
      transactions.isIncome = true;
      //navigation.navigate('MyExpensesScreen', {transactions});
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Geçmiş',
          params: {transactions},
        }),
      );
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Özet',
          params: {transactions},
        }),
      );
      setPrice('');
    }
  }
  function exphandleSubmit() {
    if (!price || !value || !date) {
      Alert.alert('HATA', 'Kategori ve miktar alanı boş geçilemez.');
    } else {
      transactions.isIncome = false;
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Geçmiş',
          params: {transactions},
        }),
      );
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Özet',
          params: {transactions},
        }),
      );
    }
    setPrice('');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 0.6,
        }}>
        <FlatList
          data={null}
          ListHeaderComponent={() => (
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => setViewMode('expense')}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    margin: 15,
                    color: viewMode === 'expense' ? '#4682b4' : 'grey',
                    borderBottomWidth: viewMode === 'expense' ? 1 : 0,
                    borderColor: viewMode === 'expense' ? '#4682b4' : 'grey',
                  }}>
                  GİDER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => setViewMode('income')}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    margin: 15,
                    color: viewMode === 'income' ? '#4682b4' : 'grey',
                    borderBottomWidth: viewMode === 'income' ? 1 : 0,
                    borderColor: viewMode === 'income' ? '#4682b4' : 'grey',
                  }}>
                  GELİR
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />

        {viewMode === 'expense' && (
          <AddExpense
            date={date}
            datePickerOpen={datePickerOpen}
            exphandleSubmit={exphandleSubmit}
            open={open}
            value={value}
            items={itemsExpense}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItemsExp}
            setDate={setDate}
            setDatePickerOpen={setDatePickerOpen}
            setPrice={setPrice}
          />
        )}
        {viewMode === 'income' && (
          <AddIncome
            date={date}
            datePickerOpen={datePickerOpen}
            exphandleSubmit={inchandleSubmit}
            open={open}
            value={value}
            items={itemsIncome}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItemsInc}
            setDate={setDate}
            setDatePickerOpen={setDatePickerOpen}
            setPrice={setPrice}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {fontSize: 20, fontWeight: 'bold', margin: 15, color: 'black'},
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  container: {
    flex: 1,
  },
});

export default TransactionScreen;
