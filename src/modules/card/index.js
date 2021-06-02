import { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ text, counter }) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: getRandomColor(),
        },
      ]}>
      <Text>{text}</Text>
    </View>
  );
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const styles = StyleSheet.create({
  card: {
    height: 80,
    width: '20%',
    margin: 5,
    padding: 5,
  },
});

export default memo(Card);
