import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SpentCard from '../../../components/SpentCard';

export default function List({data, onRemove, navigation}) {
 return (
   <FlatList
   data={data}
   renderItem={({item}) => <SpentCard
    spentName={item.name}
    spentValue={item.total}
    onLongPress={() => onRemove(item.id)}
    onPress={() => {
        navigation.navigate('spentPage', {
            id: item.id,
            name: item.name
        });
    }}/>}
    ItemSeparatorComponent={<View style={{height: 10}}/>}
   />
  );
}