import { View, Text, Button } from 'react-native';

const DummyScreen = ({ route, navigation }) => {
  const { count = 1 } = route.params;
  return (
    <View>
      <Text>This is a dummy screen</Text>
      <Text>Number of times I have been here: {count}</Text>
      <Button
        title="Go to Dummy Screen again!!"
        onPress={() => navigation.push('Dummy', { count: count + 1 })}
      />
    </View>
  );
};

export default DummyScreen;
