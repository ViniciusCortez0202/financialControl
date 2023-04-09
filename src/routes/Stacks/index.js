import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import AllSpents from '../../pages/AllSpents';
import SpentPage from '../../pages/SpentPage';

const Stack = createStackNavigator();

export default function Stacks() {
 return (
   <Stack.Navigator>
        <Stack.Screen name='allSpent' component={AllSpents}/>
        <Stack.Screen name='spentPage' component={SpentPage}/>
   </Stack.Navigator>
  );
}