import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useStateWithCallback } from './hooks';

const callback = count => {
  console.log('callback called with state val ', count);
};

const ExtendedUseStateExample = () => {
  const [count, setCount] = useStateWithCallback(0, callback);
  useEffect(() => {
    console.log('--------------------------------------------------');
    console.log('Rendering Main component with state value ', count);
  });
  return (
    <View>
      <View style={styles.section}>
        <Text>
          Custom hook is extending the useState hook to take a callback, which
          should get called once the state is successfully updated (think batch
          state update). This is for the cases when you have a code relying on
          the state update.
        </Text>
      </View>
      <View style={styles.section}>
        <Text>Counter Value: {count}</Text>
        <Button
          onPress={() => {
            setCount(c => c + 1);
            console.log('Console executing with old value of state: ', count);
          }}
          title="Update"
        />
        <Button onPress={() => setCount(c => 0)} title="Reset" />
      </View>
      <View style={styles.section}>
        <Text style={{ fontWeight: 'bold' }}>
          Check console for callback logs
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    margin: 10,
  },
});

export default ExtendedUseStateExample;
