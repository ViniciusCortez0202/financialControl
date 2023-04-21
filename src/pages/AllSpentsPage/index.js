import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, ToastAndroid } from 'react-native';
import { Button } from 'react-native';
import { Text } from 'react-native';
import { View } from 'react-native';
import { SpentContext } from '../../routes/Tabs';
import SpentInput from '../../components/SpentInput'
import ModalButton from '../../components/ModalButton';
import SpentModal from './components/spentModal';
import { styles } from './style';
import List from './components/list';
import ExpenseService from '../../services/expenseService'
import { DatabaseConnection } from '../../services/dbInit';

export default function AllSpentsPage({ navigation }) {

  const { modalVisible, setModalVisible } = React.useContext(SpentContext);

  const [data, setData] = useState([]);

  React.useEffect(() => {
   getAllExpenses(); 
  })

  const getAllExpenses = async () => {
    const expenseService = new ExpenseService(DatabaseConnection.getConnection());

    try {
      const result = await expenseService.getExpenses();

      setData(result['_array']);
    } catch (error) {
      console.log(error);
    }
  }

  const onSave = async (name) => {
    const expenseService = new ExpenseService(DatabaseConnection.getConnection());

    await expenseService.addExpense(name, 0);

    await getAllExpenses();
  }

  const onRemove = async (id) => {
    const expenseService = new ExpenseService(DatabaseConnection.getConnection());
    
    try {
      await expenseService.deleteById(id);
      await getAllExpenses();
    } catch (error) {
      ToastAndroid.show("Não é possível apagar despesas com gastos", ToastAndroid.SHORT);
    }
  }

  return (
    <View style={styles.container}>
      <SpentModal modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onSave={onSave} />

      <List data={data}
        onRemove={onRemove}
        navigation={navigation} />
    </View>
  );
}