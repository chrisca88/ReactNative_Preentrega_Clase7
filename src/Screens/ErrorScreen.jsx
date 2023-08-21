import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Ocurrió un error.</Text>
    </View>
  )
}

export default ErrorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
})