import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
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
        <TouchableOpacity
        onPress={onPress}
        style={styles.button}
        >
           <Text
        style={styles.buttonText
        }
      >
        {title}
      </Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightblue,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: '60%'
    },
      buttonText: {
        color: colors.white,
        fontSize: 16,
      },
});