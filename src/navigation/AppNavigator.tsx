// src/navigation/AppNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// Placeholder screens
const DashboardScreen = () => <Text>Dashboard Screen</Text>;
const AttendanceScreen = () => <Text>Attendance Screen</Text>;
const LeaveScreen = () => <Text>Leave Screen</Text>;
const ProfileScreen = () => <Text>Profile Screen</Text>;

export type MainTabParamList = {
  Dashboard: undefined;
  Attendance: undefined;
  Leave: undefined;
  Profile: undefined;
};

export type AppStackParamList = {
  MainTabs: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();
const Stack = createStackNavigator<AppStackParamList>();

const MainTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: '#757575',
      }}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen 
        name="Attendance" 
        component={AttendanceScreen}
        options={{ tabBarLabel: 'Attendance' }}
      />
      <Tab.Screen 
        name="Leave" 
        component={LeaveScreen}
        options={{ tabBarLabel: 'Leave' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};