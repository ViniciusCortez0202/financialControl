import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export default function SpentButton({title, onPress}) {
 return (
   <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.buttonTitle}>{title}</Text>
   </TouchableOpacity>
  );
}