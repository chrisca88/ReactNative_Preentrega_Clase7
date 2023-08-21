import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import Card from './Card'
import { setCategorySelected } from '../Features/Shop/ShopSlice'



const CategoryItem = ({
  item,
  navigation
}) => {
  const {width} = useWindowDimensions()

  const dispatch = useDispatch()

  const onSelectCategory = () => {
    dispatch(setCategorySelected(item))
    navigation.navigate('ItemListCategory', {category: item})
  }

  
  return (
    <View style = {{width: width, alignItems: 'center'}}>
    <Pressable
      onPress={onSelectCategory}
      >
      <Card additionalStyle={styles.additionalStyle}>
          <Text style={styles.textCategory}>{item}</Text>
      </Card>
    </Pressable>

    </View>
  )
}


export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 15
    },
    wrapper: {
      width: '100%',
    },
    additionalStyle: {
      borderRadius: 15
    }
})