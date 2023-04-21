import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/routes/Stacks';
import DatabaseInit from './src/services/sqliteDB';
import { DatabaseConnection } from './src/services/dbInit';

export default function App() {
  new DatabaseInit();
  return (
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  );
}

