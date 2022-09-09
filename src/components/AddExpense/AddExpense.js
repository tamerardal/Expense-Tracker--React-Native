import React from 'react';
import {View} from 'react-native';

import Input from '../input/input';
import Button from '../button/button';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import styles from './AddExpense.styles';

const AddExpense = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  setPrice,
  setDatePickerOpen,
  datePickerOpen,
  date,
  setDate,
  exphandleSubmit,
}) => {
  return (
    <View style={styles.container}>
      <DropDownPicker
        searchTextInputProps="Kategori seçiniz"
        placeholder="Harcama kategorisini seçiniz"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Input label="Miktar" onChangeText={setPrice} />
      <Button text="Tarih Seçiniz" onPress={() => setDatePickerOpen(true)} />
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
  );
};

export default AddExpense;
