import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../Global/Colors";
import { useNavigation } from "@react-navigation/native";

/**
 * This component is used in the following components:
 * OrderScreen
 * 
 * @param order The order information to display.
 */

const OrderItem = ({ order }) => {
    const navigation = useNavigation()
    const total = order.items.reduce(
        (acc, currentItem) => (acc += currentItem.price * currentItem.quantity),
        0
    );

    const goToOrderDetail = () => {
        navigation.navigate('OrderDetail', { order });
      }

    
    return (
        <View style={styles.card}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {order.updatedAt}
                </Text>
                <Text style={styles.text2}>${total}</Text>
            </View>
            <Feather name="search" size={30} color="black" onPress={goToOrderDetail} />
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.blue,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "50%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Antique",
        fontSize: 17,
        color: "black",
    },
    text2: {
        fontFamily: "Antique",
        fontSize: 19,
        color: "black",
        marginTop: 8
    },
});