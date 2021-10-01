// useRef vs instance variables
// useRef for dom data
// with notes showing in UI

import { useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const UseRefExample = () => {
  let renderCount = useRef(0);
  console.log('Main rendered!');
  return (
    <View>
      <View style={styles.section}>
        <Text>Uses of useRef Hook</Text>
        <Text>
          - Get values from form (dom) components (elements), without
          re-rendering
        </Text>
        <Text>
          - Like instance variables, value retained across re-rendering
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.highlightText}>Example</Text>
        <Text>
          Main render count:
          <Text tyle={{ color: renderCount.current > 1 && 'red' }}>
            {++renderCount.current}
          </Text>
        </Text>
        <RefInput defaultValue="Jain" />
        <StateInput defaultValue="Jain" />
      </View>
    </View>
  );
};

function RefInput({ defaultValue }) {
  const [refInput, setRefInput] = useState('');
  const renderCount = useRef(0);
  const nameInputRef = useRef();
  console.log('RefInput rendered!');
  return (
    <View style={styles.section}>
      <Text>
        useRef based ---- render count:
        <Text style={{ color: renderCount.current > 1 && 'red' }}>
          {++renderCount.current}
        </Text>
      </Text>
      <TextInput
        placeholder="Your Name?"
        ref={nameInputRef}
        style={styles.inputField}
        defaultValue={defaultValue}
        onChangeText={text => (nameInputRef.current.value = text)}
      />
      <Button
        title="Submit"
        onPress={() => {
          Alert.alert('Ref Text', `${nameInputRef.current.value}`, [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'Update State',
              onPress: () => setRefInput(nameInputRef.current.value),
            },
          ]);
        }}
      />
      <Text>
        Submitted Name is
        <Text style={styles.highlightText}> {nameInputRef.current?.value}</Text>
      </Text>
      <Text>
        Have to use state here atleast:
        <Text style={styles.highlightText}> {refInput}</Text>
      </Text>
    </View>
  );
}

function StateInput({ defaultValue }) {
  const renderCount = useRef(0);
  const [inputStateText, setInputStateText] = useState();
  console.log('StateInput rendered!');
  return (
    <View style={styles.section}>
      <Text>
        useState based ---- render count:
        <Text style={{ color: renderCount.current > 1 && 'red' }}>
          {++renderCount.current}
        </Text>
      </Text>
      <TextInput
        placeholder="Your Name?"
        style={styles.inputField}
        defaultValue={defaultValue}
        onChangeText={text => setInputStateText(text)}
      />
      <Button
        title="Submit"
        onPress={() => {
          Alert.alert('State Text', `${inputStateText}`);
        }}
      />
      <Text>
        Submitted Name is
        <Text style={styles.highlightText}> {inputStateText}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    margin: 10,
  },
  inputField: {
    backgroundColor: 'black',
    color: 'white',
  },
  highlightText: {
    color: 'maroon',
  },
});

export default UseRefExample;
