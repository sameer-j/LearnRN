import { useState } from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import Card from '../card';

const Learn = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <Text>Test</Text>
      <Button
        title={'Counter:' + counter}
        onPress={() => setCounter(counter + 1)}
      />
      <Button title="Reset Counter" onPress={() => setCounter(0)} />
      <ScrollView horizontal style={styles.container}>
        <Card text="Pure Component: Color shouldnt change on Counter update" />
        <Card
          text="Pure Component: Color should change on Counter update as counter is passed as prop"
          counter={counter}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Learn;
