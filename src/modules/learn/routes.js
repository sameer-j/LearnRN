import { createStackNavigator } from '@react-navigation/stack';

import Home from '.';
import DummyScreen from './components/dummyScreen';
import FlexBox from './components/flexBoxPractice';
import LearnPureComponent from './components/pureComponent';
import RNCheckboxList from './components/rnCheckboxList';

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
      <Stack.Screen
        name="RNCheckboxList"
        component={RNCheckboxList}
        options={{ title: 'RN Checkbox list test' }}
      />
      <Stack.Screen
        name="FlexBox"
        component={FlexBox}
        options={{ title: 'Flex Box Practice' }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default LearnRoutes;
