import { StyleSheet, View, Text } from 'react-native';

const Square = ({ char }) => {
  return (
    <View style={styles.square}>
      <Text>{char}</Text>
    </View>
  );
};
const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Important Style components used here:</Text>
        <Text>- flex</Text>
        <Text>- flexDirection</Text>
        <Text>- flexWrap</Text>
        <Text>- justifyContent</Text>
        <Text>- alignItems</Text>
      </View>
      <View style={styles.method}>
        <Text>Method 1 - Using fixed width and flexWrap</Text>
        <View style={styles.squaresLayoutMethod1}>
          <Square char="A" />
          <Square char="B" />
          <Square char="C" />
          <Square char="D" />
          <Square char="E" />
          <Square char="F" />
          <Square char="G" />
          <Square char="H" />
          <Square char="I" />
        </View>
      </View>
      <View style={styles.method}>
        <Text>Method 2 - Using 3 rows and flexDirection row</Text>
        <View style={styles.squaresLayoutMethod2}>
          <View style={styles.squareRow}>
            <Square char="A" />
            <Square char="B" />
            <Square char="C" />
          </View>
          <View style={styles.squareRow}>
            <Square char="D" />
            <Square char="E" />
            <Square char="F" />
          </View>
          <View style={styles.squareRow}>
            <Square char="G" />
            <Square char="H" />
            <Square char="I" />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightyellow',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  method: {
    alignItems: 'center',
  },
  squaresLayoutMethod1: {
    width: 150,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  squaresLayoutMethod2: {
    // width: 150,
    // height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightpink',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  square: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  squareRow: {
    flexDirection: 'row',
  },
});

export default FlexBox;
