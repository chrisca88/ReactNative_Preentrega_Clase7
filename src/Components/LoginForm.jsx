import React, { useState } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import InputForm from './InputForm'
import SubmitButton from './SubmitButton'
import { colors } from '../Global/Colors'

/**
 * This component is used in the following components:
 * LoginScreen  
 * 
 * @param onSubmit Callback function when the form is submitted.
 * @param errorEmail Error message for the email field, if any.
 * @param errorPassword Error message for the password field, if any.
 * @param navigation The navigation object for routing.
 */

const LoginForm = ({ onSubmit, errorEmail, errorPassword, navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to start</Text>
      <InputForm
        label="email"
        value={email}
        onChange={(email) => setEmail(email)}
        error={errorEmail}
      />
      <InputForm
        label="password"
        value={password}
        onChange={(password) => setPassword(password)}
        error={errorPassword}
        isSecure={true}
      />
      <SubmitButton onPress={() => onSubmit(email, password)} title="Send" />
      <Text style={styles.sub}>Not have an account?</Text>
      <Pressable onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.subLink}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm

const styles = StyleSheet.create({
    container: {
      width: '90%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.violet,
      gap: 15,
      paddingVertical: 20,
      borderRadius: 10,
    },
    title: {
      fontSize: 22,
      fontFamily: 'Antique',
    },
    sub: {
      fontSize: 14,
      color: 'black',
    },
    subLink: {
      fontSize: 14,
      color: 'blue',
    },
  });