import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import OrderItem from '../Components/OrderItem'
import { useGetOrdersByUserQuery } from '../Services/shopServices'
import { useIsFocused } from '@react-navigation/native'
import { useEffect } from 'react'

const OrderScreen = () => {
  const userEmail = useSelector(state => state.userReducer.value.email)
  const isFocused = useIsFocused()
  const { data: orders, error, isLoading,refetch} = useGetOrdersByUserQuery(userEmail, {
    enabled: isFocused
  })

  useEffect(() => {
    if (isFocused) {
      refetch();
    }
  }, [isFocused, refetch])

  return (
      <View>
          <FlatList
              data={orders}
              keyExtractor={orderItem => orderItem.id}
              renderItem={({ item }) => {
                  return <OrderItem order={item} />
              }}
          />
      </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})