import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MyExpensesScreen from './screens/MyExpensesScreen';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Özet') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'ios-list-box' : 'ios-list';
    }

    // You can return any component that you like here!
    return <Icon name={iconName} size={32} color={color} />;
  },
  tabBarActiveTintColor: 'purple',
  tabBarInactiveTintColor: 'gray',
});

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Özet"
          component={MyExpensesScreen}
          options={{headerTitle: 'Harcamalarım'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
