import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Antique': require('./src/Assets/Fonts/Bacasime_Antique/BacasimeAntique-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
   <Navigator/>

  );
}

