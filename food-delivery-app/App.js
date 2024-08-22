import { StyleSheet, Text, View } from 'react-native';
import User from './Forms/User-details';
import Address from './Forms/Address-detail';
import Payment from './Forms/Payment-details';
import ScreenTabs from './Tabs/ScreenTabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { useState, createContext } from 'react';


export default function App() {

  return (

    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='User Details'>
        <Stack.Screen name='User Details' component={User}/>
        <Stack.Screen name='Address' component={Address}/>
        <Stack.Screen name='Payment Method' component={Payment}/>
        <Stack.Screen name='Main' component={ScreenTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


