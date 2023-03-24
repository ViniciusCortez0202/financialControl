import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentInput from './src/components/SpentInput';
import SpentCard from './src/components/SpentCard';
import SpentButton from './src/components/SpentButton';

export default function App() {
  return (
    <View style={styles.container}>
      <SpentInput placeholder={"Digite um valor"}/>
      <SpentButton title="Adicionar"/>
      <SpentCard spentName={"Aluguel"} spentValue={"500"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   

  },
});
