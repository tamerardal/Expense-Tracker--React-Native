import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './input.style';

function Input({label, onChangeText}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.label}
        placeholder={label}
        onChangeText={onChangeText}
        autoFocus={true}
      />
    </View>
  );
}

export default Input;
