import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LearnRoutes from '../modules/learn/routes';
import About from '../modules/about';

const MaterialTab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <MaterialTab.Navigator>
      <MaterialTab.Screen
        name="Home"
        component={LearnRoutes}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <MaterialTab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="information-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </MaterialTab.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
