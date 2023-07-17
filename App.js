import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import ItemDetail from './src/Screens/ItemDetail';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")
  const [productSelected, setProductselected] = useState("")

  const [fontsLoaded] = useFonts({
    'Antique': require('./src/Assets/Fonts/Bacasime_Antique/BacasimeAntique-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style = {styles.container}>
      <Header/>
      {
        categorySelected ? 
        <ItemListCategory 
          category={categorySelected}
          setCategory={setCategorySelected}
          setProductselected={setProductselected}
        /> :
        productSelected ?
        <ItemDetail
          idSelected={productSelected}
          setProductselected = {setProductselected}
        />
        :
        <Home
          setCategorySelected= {setCategorySelected}
        />
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
