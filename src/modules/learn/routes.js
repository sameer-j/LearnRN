import { createStackNavigator } from '@react-navigation/stack';

import Home from '.';
import DummyScreen from './components/dummyScreen';
import ExtendedUseStateExample from './components/extendedUseStateExample';
import FlexBox from './components/flexBoxPractice';
import LearnPureComponent from './components/pureComponent';
import RNCheckboxList from './components/rnCheckboxList';
import UseRefExample from './components/useRefExample';

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
        initialParams={{ count: 1 }}
      />
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
      <Stack.Screen
        name="UseRef"
        component={UseRefExample}
        options={{ title: 'useRef Example' }}
      />
      <Stack.Screen
        name="ExtendedUseStateExample"
        component={ExtendedUseStateExample}
        options={{ title: 'Extended useState hook example' }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default LearnRoutes;
