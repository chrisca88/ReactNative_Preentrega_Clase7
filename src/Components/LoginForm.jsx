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
  const [showPassword, setShowPassword] = useState(false);


  const handleFormSubmit = () => {
    if (email && password) {
     onSubmit(email, password);
    }
  };


  return (
    <View style={styles.container}>
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
        //isSecure={true}
        isSecure={!showPassword}
      />
      <Pressable
        style={styles.showPasswordButton}
        onPress={() => setShowPassword(!showPassword)}
      >
        <Text>{showPassword ? 'Hide' : 'Show'} Password</Text>
      </Pressable>
      <SubmitButton
       onPress={handleFormSubmit}
       title="Send"
      />
      
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
      backgroundColor: colors.blue,
      gap: 15,
      paddingVertical: 20,
      borderRadius: 10,
    },
    sub: {
      fontSize: 14,
      color: 'black',
    },
    subLink: {
      fontSize: 14,
      color: colors.white,
    },
    showPasswordButton: {
      backgroundColor: colors.lightblue,
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
      alignItems: 'center',
    },
  });