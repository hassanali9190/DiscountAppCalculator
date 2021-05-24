import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import StartScreen from './components/StartScreen';
import DisCalScreen from './components/DisCalScreen';
import HistoryScreen from './components/HistoryScreen';

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start Screen"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DCalculation Screen"
          component={DisCalScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="History Screen"
          component={HistoryScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
