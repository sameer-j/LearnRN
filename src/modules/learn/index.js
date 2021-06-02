import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Learn = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>Test</Text>
      <Button
        title={'Counter:' + counter}
        onPress={() => setCounter(counter + 1)}
      />
      <Button title="Reset Counter" onPress={() => setCounter(0)} />
    </View>
  );
};

export default Learn;
