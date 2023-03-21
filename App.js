import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentInput from './src/components/SpentInput';

export default function App() {
  return (
    <View style={styles.container}>     
      <SpentInput placeholder={"Digite um valor"}
      keyBoardType={"number-pad"} 
      onChangeText={(value) => {console.log(value)}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
