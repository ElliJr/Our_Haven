import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './OurHaven/HomeScreen';
import CadastroScreen from './OurHaven/CadastroScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">    
        <Stack.Screen name="Home" component={HomeScreen} />        
        <Stack.Screen name="Conta" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
