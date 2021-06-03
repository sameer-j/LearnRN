import { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../card';

const LearnPureComponent = () => {
  const [counter, setCounter] = useState(0);
  const cardCounter = useCallback(() => {
    setCounter(count => count + 2);
  }, []);
  return (
    <View>
      <Button
        title={'Counter:' + counter}
        onPress={() => setCounter(counter + 1)}
        color={'purple'}
      />
      <Button title="Reset Counter" onPress={() => setCounter(0)} />
      <Text>Pure Component: useMemo</Text>
      <View style={styles.container}>
        <Card text="Color shouldnt change on Counter update, without counter prop" />
        <Card text="Card with counter prop" counter={counter} />
      </View>
      <Text>Pure Component: useCallback (counter+2)</Text>
      <View style={styles.container}>
        <Card text="Card" onPress={cardCounter} />
        <Card
          text="Card with counter prop"
          counter={counter}
          onPress={cardCounter}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default LearnPureComponent;
