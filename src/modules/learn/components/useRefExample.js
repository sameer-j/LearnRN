// useRef vs instance variables
// useRef for dom data
// with notes showing in UI

import { useRef } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const UseRefExample = () => {
  const nameInputRef = useRef('');
  return (
    <View>
      <View>
        <Text>Uses of useRef Hook</Text>
        <Text> - Get values from form (dom) components (elements)</Text>
        <Text> - Like instance variables to store data</Text>
        <Text>
          These things are usually done by using states, but why cause
          re-rendering for these?
        </Text>
      </View>
      <View>
        <Text>1. Retrieving Data from input elements</Text>
        <TextInput placeholder="Your Name?" ref={nameInputRef} />
        <Button title="Submit" />
        <Text>Submitted Name is </Text>
      </View>
    </View>
  );
};

export default UseRefExample;
