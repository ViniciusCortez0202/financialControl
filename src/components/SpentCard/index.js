import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { styles } from './style';

export default function SpentCard({ spentName, spentValue, onPress, onLongPress }) {
    return (
        <Pressable style={styles.card} onPress={onPress} onLongPress={onLongPress}>
            <Text style={styles.spentName}>{spentName}</Text>
            <Text style={styles.spentValue}>R$ {spentValue}</Text>
        </Pressable>
    );
}