import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

/**
 * This component is used in the following components:
 * LoginScreen 
 * SignupScreen
 * 
 * @param onPress Callback function when the button is pressed.
 * @param title The text to display on the button.
 */

const SubmitButton = ({ onPress, title }) => {
    return (
        <Pressable onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightpink,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.lightblue,
        fontFamily: 'Antique',
        fontSize: 22
    },
});