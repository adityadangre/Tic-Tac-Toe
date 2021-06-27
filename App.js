import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Game from './Game'
import Name from './Name'

const Stack = createStackNavigator();

export default function App() {
  return( 
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}
      initialRouteName="Name">

        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Game" component={Game} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
