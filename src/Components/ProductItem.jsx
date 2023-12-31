import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { useDispatch } from 'react-redux';
import React from 'react'
import Card from './Card'
import { setIdSelected } from '../Features/Shop/ShopSlice'

/**
 * This component is used in the following components:
 * ItemListCategory
 * 
 * @param item The product information to display.
 * @param navigation The navigation object for routing.
 */

const ProductItem = ({
  item,
  navigation
 }) => {

  const {height, width} = useWindowDimensions();
  const dispatch = useDispatch()
  
  const onSelect = (id) =>{
    dispatch(setIdSelected(item.id))
    navigation.navigate('Detail', {productId: item.id, title: item.title})
  }

  return (
    <Pressable onPress={() => onSelect(item.id)}>
        <Card additionalStyle={styles.additionalStylesCard}>
            <Text
                style={
                    width > 350 ? styles.textCategory : 
                    styles.textCategorySM
                }
            >
                {item.title}
            </Text>
            <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: item.images[0] }}
            />
        </Card>
    </Pressable>
);
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 94,
    width: '40%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8
  },
  textCategory:{
    width: '50%',
    fontSize: 20,
  },
  textCategorySM:{
    width: '50%',
    fontSize: 15,
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'space-between',
    width: 'auto'
  }
})