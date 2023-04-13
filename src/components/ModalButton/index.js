import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './style';

export default function ModalButton({title, onPress, style}) {
 return (
    <Pressable
        style={[styles.button, style]}
        onPress={onPress}>
        <Text style={styles.textStyle}>{title}</Text>
    </Pressable>
  );
}