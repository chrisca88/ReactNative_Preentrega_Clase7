import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import Navigator from './src/Navigation/Navigator';
import store from './src/Store/store';
import { init } from './src/SQLite';
import { fonts } from './src/Assets/Fonts';

target="_blank"
rel="noreferrer"
export default function App() {

  useEffect(()=> {
    init()
      .then((result)=> {
        
      })
      .catch(error => {
  
    })
  }, [])

  const [fontsLoaded] = useFonts(fonts)

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  );
}

