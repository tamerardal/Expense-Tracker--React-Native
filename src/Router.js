import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Summary from './screens/SummaryScreen';
import Transaction from './screens/TransactionScreen';
import History from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Özet') {
      iconName = 'home';
      size = focused ? 32 : 24;
    } else if (route.name === 'İşlem Ekle') {
      iconName = 'contrast';
      size = focused ? 32 : 24;
    } else if (route.name === 'Geçmiş') {
      iconName = 'clipboard-text-clock-outline';
      size = focused ? 32 : 24;
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#4682b4',
  tabBarInactiveTintColor: 'gray',
});

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Özet"
          component={Summary}
          options={{headerTitle: 'Özet'}}
        />
        <Tab.Screen
          name="İşlem Ekle"
          component={Transaction}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Geçmiş"
          component={History}
          options={{
            headerTitle: 'Geçmiş',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
