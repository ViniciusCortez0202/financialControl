import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SpentInput from './src/components/SpentInput';
import SpentCard from './src/components/SpentCard';
import SpentButton from './src/components/SpentButton';
import SpentPage from './src/pages/SpentPage';
import { NavigationContainer } from '@react-navigation/native';
import TabsRoute from './src/routes/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <TabsRoute/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   

  },
});
