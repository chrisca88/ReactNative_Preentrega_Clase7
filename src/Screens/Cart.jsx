import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from '../Components/CartItem';
import { usePostCartMutation } from '../Services/shopServices';
import { colors } from '../Global/Colors';

const Cart = () => {
    const {items: CartData, total, updatedAt} = useSelector(state => state.cartReducer.value)
    const email = useSelector(state => state.userReducer.value.email)

    const [triggerPostCart, result] = usePostCartMutation()

    const onConfirm = () => {
        triggerPostCart({ items: CartData, total, updatedAt, user: email })
    }

    return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
        <View style={styles.totalContainer}>
            <Pressable
                onPress = {onConfirm}
            >
                <Text  style={styles.text}>
                    Confirm
                </Text>
            </Pressable>
            <Text style={styles.textTotal}>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flex: 1,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textTotal:{
        fontWeight:'bold',
 
    },
    text:{
        fontWeight:'bold',
        backgroundColor: colors.lightblue,
        borderRadius:5,
        padding:10,
        margin:5

    }
})