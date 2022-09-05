import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './button.styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
