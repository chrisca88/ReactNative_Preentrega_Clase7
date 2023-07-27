import { useFonts } from 'expo-font';
import Navigator from './src/Navigation/Navigator';
import { Provider } from 'react-redux';
import store from './src/Store/store';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Antique': require('./src/Assets/Fonts/Bacasime_Antique/BacasimeAntique-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>

  );
}

