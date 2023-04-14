import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { SpentContext } from '../../routes/Tabs';
import SpentInput from '../../components/SpentInput'
import ModalButton from '../../components/ModalButton';
import SpentModal from './components/spentModal';
import { styles } from './style';
import List from './components/list';

export default function AllSpentsPage({navigation}) {

  const {modalVisible, setModalVisible} = React.useContext(SpentContext);

  const [data, setData] = useState([
    {
    id: 1,
    spentName: "Feira",
    spentValue: 750,
    },
    {
      id: 2,
      spentName: "Aluguel",
      spentValue: 850,
    },
    {
      id: 3,
      spentName: "Carro",
      spentValue: 1200,
    },
    {
      id: 4,
      spentName: "Escola",
      spentValue: 350,
    }
  ])

  const onSave = (name) => {
    const newSpent = {
      id: data.length+1,
      spentName: name,
      spentValue: 0
    };

    setData([...data, newSpent]);
  }

  const onRemove = (id) => {
    const newData = data.filter((elemento) => elemento.id != id);
    setData(newData);
  }

 return (
   <View style={styles.container}>
        <SpentModal modalVisible={modalVisible}
         setModalVisible={setModalVisible} 
         onSave={onSave}/>

         <List data={data}
         onRemove={onRemove}
         navigation={navigation}/>
   </View>
  );
}