import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({
  item,
  navigation
 }) => {

  const {height, width} = useWindowDimensions();
  
  const onSelect = (id) =>{
    navigation.navigate('Detail', {productId: item.id, title: item.title})
  }

  return (
    <Pressable onPress={() => onSelect(item.id)}>
    <Card
      additionalStyle={styles.additionalStylesCard}
    >
        <Text style={ width > 350 ? styles.textCategory : styles.textCategorySM }>{item.title}</Text>
        <Image 
          style = {styles.image}
          resizeMode='cover'
          source={{uri: item.images[0]}}
        />
    </Card>

    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: '40%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8
  },
  textCategory:{
    width: '50%',
    fontSize: 22,
  },
  textCategorySM:{
    width: '50%',
    fontSize: 15,
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  }
})