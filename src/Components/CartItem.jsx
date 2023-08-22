import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Features/Cart/cartSlice";

/**
 * This component is used in the following components:
 * Cart 
 * 
 * @param cartItem The item information to display.
 */

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const onRemoveItem = () => {
        dispatch(removeCartItem(cartItem));
    };
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>

            </View>
            <Pressable onPress={onRemoveItem}>
            <Entypo name="trash" size={30} color="black" />
            </Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 90,
        backgroundColor: colors.blue,
        padding: 10,
        margin: 10,
        borderWidth: 3,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Antique",
        fontSize: 19,
        color: colors.violet,
    },
    text2: {
        fontFamily: "Antique",
        fontSize: 14,
        color: colors.violet,
        fontWeight:'bold'
    },
});