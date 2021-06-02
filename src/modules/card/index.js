import { memo } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Card = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: getRandomColor(),
        },
      ]}>
      <Text>{text}</Text>
    </TouchableOpacity>
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
    flex: 1,
    margin: 5,
    padding: 5,
  },
});

export default memo(Card);
