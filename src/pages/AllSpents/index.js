import React from 'react';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';

export default function AllSpents({navigation}) {
 return (
   <View>
        <Text>AllSpetns</Text>
        <Button title="SpentPage" onPress={() => {
           navigation.navigate('spentPage')}}/>
   </View>
  );
}