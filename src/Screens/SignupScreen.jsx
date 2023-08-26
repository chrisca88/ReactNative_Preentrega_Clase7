import React from 'react'
import { View, StyleSheet } from 'react-native'
import SignupForm from '../Components/SignupForm';


const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <SignupForm navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen