import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home2 from './Screen/home2';
import Home1 from './Screen/home1';
import Home3 from './Screen/home3';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName="Home1" screenOptions={{headerShown : false}}  >
      <Stack.Screen name="home1" component={Home1} />
      <Stack.Screen name="home2" component={Home2} />
      <Stack.Screen name="home3" component={Home3} />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

