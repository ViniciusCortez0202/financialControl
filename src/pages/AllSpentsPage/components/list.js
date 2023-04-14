import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SpentCard from '../../../components/SpentCard';

export default function List({data, onRemove, navigation}) {
 return (
   <FlatList
   data={data}
   renderItem={({item}) => <SpentCard
    spentName={item.spentName}
    spentValue={item.spentValue}
    onLongPress={() => onRemove(item.id)}
    onPress={() => {
        navigation.navigate('spentPage', {
            id: item.id
        });
    }}/>}
    ItemSeparatorComponent={<View style={{height: 10}}/>}
   />
  );
}