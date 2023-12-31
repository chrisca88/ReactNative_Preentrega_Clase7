import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

/**
 * This component is used in the following components:
 * - ImageSelector
 * - ListAddress
 * - LocationSelector
 * 
 * @param title The text to display on the button.
 * @param color Background color of the button.
 */

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.lightblue,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "80%",
        borderWidth: 1,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        padding: 8
    },
    text: {
        fontFamily: "Antique",
        fontSize: 18,
        color: colors.white,
    },
});