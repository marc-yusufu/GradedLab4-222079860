import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from '../Main-screens/Menu';
import Cart from '../Main-screens/Cart';
import Profile from '../Main-screens/Profile';

const Tab = createBottomTabNavigator();

import { useState, createContext } from 'react';


function ScreenTabs() {

  return (

    <Tab.Navigator>
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default ScreenTabs;