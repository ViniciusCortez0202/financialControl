import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

export default function SpentInput({placeholder, keyBoardType, onChangeText}) {
 return (
   <TextInput placeholder={placeholder}
   keyboardType={keyBoardType}
   onChangeText={onChangeText}
   style={styles.input}/>
  );
}