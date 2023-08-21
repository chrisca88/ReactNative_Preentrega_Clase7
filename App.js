import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { useEffect } from 'react';

import Navigator from './src/Navigation/Navigator';
import store from './src/Store/store';
import { dropTableSessions, init } from './src/SQLite';
import { fonts } from './src/Assets/Fonts';


export default function App() {

  init(()=> {
    dropTableSessions()
      .then(()=> {
        
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

