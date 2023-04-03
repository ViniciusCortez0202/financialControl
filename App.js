import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentInput from './src/components/SpentInput';
import SpentCard from './src/components/SpentCard';
import SpentButton from './src/components/SpentButton';
import SpentPage from './src/pages/SpentPage';

export default function App() {
  return (
    <SpentPage/>
  );
}

const styles = StyleSheet.create({
  container: {
   

  },
});
