import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import 'react-native-gesture-handler';
import Navigator from './navigators';

const App = () => {
  const [initialUrl, setInitialUrl] = useState();
  const [openUrl, setOpenUrl] = useState();
  useEffect(() => {
    Linking.getInitialURL().then(setInitialUrl);
    Linking.addEventListener('url', ({ url }) => {
      console.log('App openURL:', url);
      setOpenUrl(url);
    });
  }, []);
  return <Navigator />;
};

export default App;
