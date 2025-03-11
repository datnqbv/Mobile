import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ScanScreen from '../screens/ScanScreen';
import SuccessScreen from '../screens/SuccessScreen';
import DirectoryScreen from '../screens/DirectoryScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="home-outline" color={color} size={size} />) }} 
      />
      <Tab.Screen 
        name="Scan" 
        component={ScanScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="scan-outline" color={color} size={size} />) }} 
      />
      <Tab.Screen 
        name="Success" 
        component={SuccessScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="checkmark-circle-outline" color={color} size={size} />) }} 
      />
      <Tab.Screen 
        name="Directory" 
        component={DirectoryScreen} 
        options={{ tabBarIcon: ({ color, size }) => (<Ionicons name="calendar-outline" color={color} size={size} />) }} 
      />
    </Tab.Navigator>
  );
}
