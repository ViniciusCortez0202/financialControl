import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalButton from '../../../components/ModalButton';
import SpentInput from '../../../components/SpentInput';
import { Modal } from 'react-native';

export default function SpentModal({modalVisible, setModalVisible, onSave}) {
 let name = "";
 
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}>Insira uma nome para a sua despesa:</Text>
            <SpentInput placeholder={"EX.: Aluguel"} 
            onChangeText={(value) => {
              name = value;
            }}/>
        <View style={styles.buttons}>
            <ModalButton title="Cancelar"
            style={{backgroundColor: 'red'}}
            onPress={() => {
                setModalVisible(!modalVisible);
            }}/>
            <ModalButton title="Confirmar"
            style={{backgroundColor: 'green'}}
            onPress={() => {
                setModalVisible(!modalVisible);
                onSave(name);
            }}/>
        </View>
        </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      width: 275,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
  
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    buttons: {
      flexDirection: 'row',
    }
  });