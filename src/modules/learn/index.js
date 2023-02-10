import { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';
import { Text } from 'react-native-paper';

const Home = ({ navigation }) => {
  const [initialUrl, setInitialUrl] = useState();
  const [openUrl, setOpenUrl] = useState();
  useEffect(() => {
    Linking.getInitialURL().then(setInitialUrl);
    Linking.addEventListener('url', ({ url }) => {
      console.log('URL:', url);
      setOpenUrl(url);
    });
  }, []);
  return (
    <View
      style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <View style={styles.buttonContainer}>
        <Button
          title="Learn Pure Components"
          onPress={() => navigation.navigate('Pure Components')}
        />
        <Separator />
        <Button
          title="Dummy Screen"
          onPress={() => navigation.navigate('Dummy')}
        />
        <Separator />
        <Button
          title="RN Checkbox list test"
          onPress={() => navigation.navigate('RNCheckboxList')}
        />
        <Separator />
        <Button
          title="Flex Box Practice"
          onPress={() => navigation.navigate('FlexBox')}
        />
        <Separator />
        <Button
          title="useRef Example"
          onPress={() => navigation.navigate('UseRef')}
        />
        <Separator />
        <Button
          title="Extended useState hook"
          onPress={() => navigation.navigate('ExtendedUseStateExample')}
        />
        <Separator />
      </View>
      <View>
        <Text>Initial Url: {initialUrl}</Text>
        <Text>Open Url: {openUrl}</Text>
      </View>
    </View>
  );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    marginVertical: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 50,
  },
});
export default Home;
