import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Antique': require('./src/Assets/Fonts/Bacasime_Antique/BacasimeAntique-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style = {styles.container}>
      <Header/>
      {
        categorySelected ? 
        <ItemListCategory 
          category={categorySelected}
          setCategory={setCategorySelected}
        /> :
        <Home
          setCategorySelected={setCategorySelected}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
