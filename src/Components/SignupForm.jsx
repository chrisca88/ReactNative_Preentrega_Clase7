import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import InputForm from './InputForm'
import SubmitButton from './SubmitButton'
import { useDispatch } from 'react-redux'
import { useSignUpMutation } from '../Services/authServices';
import { setUser } from "../Features/User/userSlice"
import { colors } from '../Global/Colors'
import { isAtLeastSixCharacters, isValidEmail } from '../Validations/auth'

/**
 * This component is used in the following components:
 * SignupScreen
 * 
 * @param navigation The navigation object for routing.
 */

const SignupForm = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [errorMail, setErrorMail] = useState('')
  const [password, setPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

  const [triggerSignUp, result] = useSignUpMutation()
  const dispatch = useDispatch()

  const onSubmit = () => {
    try {
      const isValidVariableEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);
      const isRepeatedPasswordCorrect = password === confirmPassword;

      if (isValidVariableEmail && isCorrectPassword && isRepeatedPasswordCorrect) {
        const request = {
          email,
          password,
          returnSecureToken: true,
        };
        triggerSignUp(request);
      }

      if (!isValidVariableEmail) setErrorMail('Email is not correct');
      else setErrorMail('');
      if (!isCorrectPassword) setErrorPassword('Password must be at least 6 characters');
      else setErrorPassword('');
      if (!isRepeatedPasswordCorrect) setErrorConfirmPassword('Passwords must match');
      else setErrorConfirmPassword('');
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      dispatch(
        setUser({
          email: result.data.email,
          idToken: result.data.idToken,
          localId: result.data.localId,
          profileImage: '',
        })
      );
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <InputForm label="email" onChange={setEmail} error={errorMail} />
      <InputForm label="password" onChange={setPassword} error={errorPassword} isSecure={true} />
      <InputForm
        label="confirm password"
        onChange={setConfirmPassword}
        error={errorConfirmPassword}
        isSecure={true}
      />
      <SubmitButton onPress={onSubmit} title="Send" />
      <Text style={styles.sub}>Already have an account?</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.subLink}>Login</Text>
      </Pressable>
    </View>
  )
}

export default SignupForm

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
  