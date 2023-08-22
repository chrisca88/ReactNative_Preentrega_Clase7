import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

/**
 * This component is used in the following components:
 * ProductItem 
 * CategoryItem
 * 
 * @param children The content to be displayed within the card.
 * @param additionalStyle Additional styles to be applied to the card container.
 */

const Card = ({children, additionalStyle = []}) => {
  return (
    <View style = {[styles.cardContainer, additionalStyle]}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height: 50,
        width: 250,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 2,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        marginVertical: 10,
        borderRadius: 8,
    }
})