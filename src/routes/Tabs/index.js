import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import Home from '../../pages/Home';
import AllSpents from '../../pages/AllSpents';
import Stacks from '../Stacks';

const Tabs = createBottomTabNavigator();

export default function TabsRoute() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen
                options={{
                    headerShown: false
                }}
                name="spentStack" component={Stacks} />
        </Tabs.Navigator>
    );
}