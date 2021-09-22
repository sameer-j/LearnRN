import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Learn Pure Components"
        onPress={() => navigation.navigate('Pure Components')}
      />
      <Button
        title="Dummy Screen"
        onPress={() => navigation.navigate('Dummy')}
      />
      <Button
        title="RN Checkbox list test"
        onPress={() => navigation.navigate('RNCheckboxList')}
      />
      <Button
        title="Flex Box Practice"
        onPress={() => navigation.navigate('FlexBox')}
      />
    </View>
  );
};

export default Home;
