import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { Ionicons } from '@expo/vector-icons';

const Header = ({
  route,
  navigation
}) => {
  let title
  if (route.name === 'Home') title = 'Home'
  if (route.name === 'Detail') title = route.params.title
  if (route.name === 'ItemListCategory') title = route.params.category
  return (
    <View 
        style={styles.containerHeader}>
      <Text style ={styles.text}>{title}</Text>
      { route.name !== 'Home' ?
        <Pressable style= {styles.pressable} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </Pressable>
      : null
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: colors.violet,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        flexDirection:'row',
        position: 'relative'

    },
    pressable:{
      position: 'absolute',
      right: 30,
      top: '50%'
    },
    text: {
        fontSize: 25,
        fontFamily: 'Antique'
    }
})