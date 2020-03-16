/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import First from './app/scenes/First';
import Second from './app/scenes/Second';

const Stack = createStackNavigator();

function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: 'Balance',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="First" component={First} />
          <Stack.Screen name="Second" component={Second} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default App;