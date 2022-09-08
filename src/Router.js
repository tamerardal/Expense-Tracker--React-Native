import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MyExpenses from './screens/MyExpensesScreen';
import Transaction from './screens/TransactionScreen';
import History from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color}) => {
    let iconName;

    if (route.name === 'MyExpenses') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Transaction') {
      iconName = focused ? 'contrast' : 'contrast';
    } else if (route.name === 'History') {
      iconName = focused
        ? 'clipboard-text-clock-outline'
        : 'clipboard-text-clock-outline';
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={32} color={color} />;
  },
  tabBarActiveTintColor: '#4682b4',
  tabBarInactiveTintColor: 'gray',
});

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="MyExpenses"
          component={MyExpenses}
          options={{headerTitle: 'Harcamalarım'}}
        />
        <Tab.Screen
          name="Transaction"
          component={Transaction}
          options={{headerTitle: 'Gelir/Gider Ekle'}}
        />
        <Tab.Screen
          name="History"
          component={History}
          options={{headerTitle: 'Geçmiş'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
