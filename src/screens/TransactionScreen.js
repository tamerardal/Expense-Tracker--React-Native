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

import Input from '../components/input/input';
import Button from '../components/button/button';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

function AddExpense({navigation}) {
  let id = Math.random();
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());
  const [isIncome, setisIncome] = useState(false);
  const [viewMode, setViewMode] = React.useState('expense');
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [itemsExpense, setItemsExp] = useState([
    {label: 'Kira', value: 'Kira'},
    {label: 'Market', value: 'Market'},
    {label: 'Fatura', value: 'Fatura'},
    {label: 'Eğlence', value: 'Eğlence'},
    {label: 'Giyim', value: 'Giyim'},
    {label: 'Ulaşım', value: 'Ulaşım'},
    {label: 'Diğer', value: 'Diğer'},
  ]);
  const [itemsIncome, setItemsInc] = useState([
    {label: 'Maaş', value: 'Maaş'},
    {label: 'Ek Gelir', value: 'Ek Gelir'},
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
    if (!price || !value) {
      Alert.alert('HATA', 'Kayıt formunda hiçbir alan boş geçilemez.');
    } else {
      transactions.isIncome = true;
      //navigation.navigate('MyExpensesScreen', {transactions});
      navigation.dispatch(
        CommonActions.navigate({
          name: 'History',
          params: {transactions},
        }),
      );
      navigation.dispatch(
        CommonActions.navigate({
          name: 'MyExpenses',
          params: {transactions},
        }),
      );
      setPrice('');
    }
  }
  function exphandleSubmit() {
    if (!price || !value) {
      Alert.alert('HATA', 'Kayıt formunda hiçbir alan boş geçilemez.');
    } else {
      transactions.isIncome = false;
      navigation.dispatch(
        CommonActions.navigate({
          name: 'History',
          params: {transactions},
        }),
      );
      navigation.dispatch(
        CommonActions.navigate({
          name: 'MyExpenses',
          params: {transactions},
        }),
      );
    }
    setPrice('');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
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

      {/* <Input label="Başlık" onChangeText={setTitle} />
      <Input label="Miktar" onChangeText={setPrice} />
      <DropDownPicker
        searchTextInputProps="Kategori seçiniz"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Button text="Kaydet" onPress={handleSubmit} /> */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 60,
        }}>
        {viewMode === 'expense' && (
          <View style={styles.container}>
            <DropDownPicker
              searchTextInputProps="Kategori seçiniz"
              open={open}
              value={value}
              items={itemsExpense}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItemsExp}
            />
            <Input label="Miktar" onChangeText={setPrice} />
            <Button
              text="Tarih Seçiniz"
              onPress={() => setDatePickerOpen(true)}
            />
            <DatePicker
              modal
              mode="date"
              open={datePickerOpen}
              date={date}
              onConfirm={date => {
                setDatePickerOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setDatePickerOpen(false);
              }}
            />
            <Button text="EKLE" onPress={exphandleSubmit} />
          </View>
        )}
        {viewMode === 'income' && (
          <View style={{flex: 1}}>
            <DropDownPicker
              searchTextInputProps="Kategori seçiniz"
              open={open}
              value={value}
              items={itemsIncome}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItemsInc}
            />
            <Input label="Miktar" onChangeText={setPrice} />
            <Button
              text="Tarih Seçiniz"
              onPress={() => setDatePickerOpen(true)}
            />
            <DatePicker
              modal
              mode="date"
              open={datePickerOpen}
              date={date}
              onConfirm={date => {
                setDatePickerOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setDatePickerOpen(false);
              }}
            />
            <Button text="EKLE" onPress={inchandleSubmit} />
          </View>
        )}
      </ScrollView>
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

export default AddExpense;
