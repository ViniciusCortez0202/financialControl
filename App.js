import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentInput from './src/components/SpentInput';
import SpentCard from './src/components/SpentCard';

export default function App() {
  return (
    <View style={styles.container}>     
      <SpentCard spentName="Aluguel" spentValue="500" onPress={() => console.log("onPress")} onLongPress={() => console.log("OnLongPRess")}/>
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
