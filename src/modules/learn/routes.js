import { createStackNavigator } from '@react-navigation/stack';

import Home from '.';
import DummyScreen from './components/dummyScreen';
import LearnPureComponent from './components/pureComponent';

const Stack = createStackNavigator();

const LearnRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Pure Components"
        component={LearnPureComponent}
        options={{ title: 'Learn Pure Components' }}
      />
      <Stack.Screen
        name="Dummy"
        component={DummyScreen}
        options={{ title: 'Dummy Screen' }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default LearnRoutes;
